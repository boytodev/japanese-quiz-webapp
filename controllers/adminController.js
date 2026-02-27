const Survey = require('../models/Survey');

// แสดงหน้าล็อกอิน
exports.getLogin = (req, res) => {
  res.render('admin/login', { error: null });
};

// ตรวจสอบการล็อกอิน
exports.postLogin = (req, res) => {
  const { password } = req.body;
  
  if (password === process.env.ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    res.redirect('/admin/dashboard');
  } else {
    res.render('admin/login', { error: 'รหัสผ่านไม่ถูกต้อง' });
  }
};

// แสดง Dashboard
exports.getDashboard = async (req, res) => {
  try {
    // ตรวจสอบว่าล็อกอินหรือยัง
    if (!req.session.isAdmin) {
      return res.redirect('/admin/login');
    }

    // ดึงข้อมูลทั้งหมด เรียงตามวันที่ล่าสุด
    const surveys = await Survey.find().sort({ createdAt: -1 });
    
    // คำนวณสถิติ
    const totalPlayers = surveys.length;
    
    // นับจำนวนตามกลุ่ม
    const studentCount = surveys.filter(s => s.group === 'student').length;
    const workerCount = surveys.filter(s => s.group === 'worker').length;
    
    // นับการใช้ภาษาญี่ปุ่น
    const useJapaneseYes = surveys.filter(s => s.useJapanese === 'yes').length;
    const useJapaneseNo = surveys.filter(s => s.useJapanese === 'no').length;
    const useJapaneseSometimes = surveys.filter(s => s.useJapanese === 'sometimes').length;

    res.render('admin/dashboard', {
      surveys,
      totalPlayers,
      studentCount,
      workerCount,
      useJapaneseYes,
      useJapaneseNo,
      useJapaneseSometimes
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).send('เกิดข้อผิดพลาดในการโหลดข้อมูล');
  }
};

// ออกจากระบบ
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
};

// ลบข้อมูล
exports.deleteSurvey = async (req, res) => {
  try {
    if (!req.session.isAdmin) {
      return res.status(403).json({ success: false, message: 'ไม่มีสิทธิ์เข้าถึง' });
    }

    await Survey.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting survey:', error);
    res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาด' });
  }
};
