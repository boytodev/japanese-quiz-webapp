// แสดงหน้าแรก
exports.getIndex = (req, res) => {
  res.render('index');
};

// แสดงหน้าเกม
exports.getGame = (req, res) => {
  res.render('game');
};

// แสดงหน้าผลลัพธ์
exports.getResult = (req, res) => {
  const score = parseInt(req.query.score) || 0;
  const total = parseInt(req.query.total) || 5;
  const level = req.query.level || '';
  
  let message = '';
  const percentage = (score / total) * 100;
  
  if (percentage >= 80) {
    message = 'ยอดเยี่ยม! คุณมีความรู้ภาษาญี่ปุ่นในระดับดีมาก 🎉';
  } else if (percentage >= 60) {
    message = 'ดีมาก! คุณมีพื้นฐานที่ดี แต่ยังมีที่พัฒนาอีก 👍';
  } else {
    message = 'ควรฝึกฝนเพิ่มเติม! อย่าท้อใจ ลองเล่นอีกครั้งนะ 💪';
  }
  
  res.render('result', { score, total, message, level });
};
