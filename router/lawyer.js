'use strict'

const express = require('express');
const router = express.Router();
const { LawyerController } = require('../controllers/LawyerController');

router.get('/', LawyerController.show);


module.exports = { lawyerRouter: router }