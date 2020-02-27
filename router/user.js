'use strict'

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/UserController');

router.get('/', UserController.show);


module.exports = { userRouter: router }