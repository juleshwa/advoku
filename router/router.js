'use strict'

const express = require('express');
const router = express.Router();
const { lawyerRouter } = require('./lawyer');
const { userRouter } = require('./user')
const { Controller } = require('../controllers/Controller');
const { Auth } = require('../middlewares/Auth')

router.get('/', Controller.homepage);
router.post('/login', Controller.login);
router.post('/signup', Controller.register);
router.get('/logout', Auth.isLogin, Controller.logout);

router.use('/lawyers', lawyerRouter);
router.use('/users', userRouter)


module.exports = { router }