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

    res.render('admin/dashboard');
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
