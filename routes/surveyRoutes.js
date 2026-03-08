const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// หน้าแรก
router.get('/', surveyController.getIndex);

// หน้าเกม (ข้ามแบบสอบถาม)
router.get('/game', surveyController.getGame);

// หน้าผลลัพธ์
router.get('/result', surveyController.getResult);

module.exports = router;
