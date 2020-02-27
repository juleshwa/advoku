'use strict'

const express = require('express');
const router = express.Router();
const { lawyerRouter } = require('./lawyer');
const { userRouter } = require('./user')
const { Controller } = require('../controllers/Controller');

router.get('/', Controller.homepage);

router.use('/lawyers', lawyerRouter);
router.use('/users', userRouter)


module.exports = { router }