const Survey = require('../models/Survey');

// แสดงหน้าแรก
exports.getIndex = (req, res) => {
  res.render('index');
};

// แสดงหน้าแบบสอบถาม
exports.getSurvey = (req, res) => {
  res.render('survey');
};

// บันทึกข้อมูลแบบสอบถาม
exports.postSurvey = async (req, res) => {
  try {
    const { fullname, group, school, useJapanese, phone, level } = req.body;
    
    const newSurvey = new Survey({
      fullname,
      group,
      school: group === 'student' ? school : '',
      useJapanese,
      phone
    });

    await newSurvey.save();
    res.redirect(`/game?level=${level}`);
  } catch (error) {
    console.error('Error saving survey:', error);
    res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
  }
};

// แสดงหน้าเกม
exports.getGame = (req, res) => {
  res.render('game');
};

// แสดงหน้าผลลัพธ์
exports.getResult = (req, res) => {
  const score = parseInt(req.query.score) || 0;
  const total = parseInt(req.query.total) || 5;
  
  let message = '';
  const percentage = (score / total) * 100;
  
  if (percentage >= 80) {
    message = 'ยอดเยี่ยม! คุณมีความรู้ภาษาญี่ปุ่นในระดับดีมาก 🎉';
  } else if (percentage >= 60) {
    message = 'ดีมาก! คุณมีพื้นฐานที่ดี แต่ยังมีที่พัฒนาอีก 👍';
  } else {
    message = 'ควรฝึกฝนเพิ่มเติม! อย่าท้อใจ ลองเล่นอีกครั้งนะ 💪';
  }
  
  res.render('result', { score, total, message });
};
