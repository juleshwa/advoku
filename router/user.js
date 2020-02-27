'use strict'

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');
const { Auth } = require('../middlewares/Auth')

router.get('/', Auth.isLogin, Auth.isAdmin, UserController.show);

module.exports = { userRouter: router }