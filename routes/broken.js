const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/brokenController');

router.get('/', getData);

module.exports = router;
