const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// root redirect to login or dashboard
router.get('/', (req, res) => {
  // if already logged in, go to dashboard
  if (req.session && req.session.isAdmin) {
    return res.redirect('/admin/dashboard');
  }
  res.redirect('/admin/login');
});

// หน้าล็อกอิน
router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);

// Dashboard
router.get('/dashboard', adminController.getDashboard);

// ออกจากระบบ
router.get('/logout', adminController.logout);

// ลบข้อมูล
router.delete('/survey/:id', adminController.deleteSurvey);

module.exports = router;
