const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// หน้าแรก
router.get('/', surveyController.getIndex);

// หน้าแบบสอบถาม
router.get('/survey', surveyController.getSurvey);
router.post('/survey', surveyController.postSurvey);

// หน้าเกม
router.get('/game', surveyController.getGame);

// หน้าผลลัพธ์
router.get('/result', surveyController.getResult);

module.exports = router;
