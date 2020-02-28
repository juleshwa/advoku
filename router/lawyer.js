'use strict'

const express = require('express');
const router = express.Router();
const { LawyerController } = require('../controllers/LawyerController');
const { Auth } = require('../middlewares/Auth')

router.get('/', Auth.isLogin, Auth.isAdmin, LawyerController.show);

router.get('/profile', Auth.isLogin, Auth.isUser, LawyerController.showProfile)

router.get('/update/:lawyerId', Auth.isLogin, Auth.isAdmin, LawyerController.updateForm);
router.get('/update/:lawyerId', Auth.isLogin, Auth.isAdmin, LawyerController.updateLawyer);

router.get('/remove/:lawyerId', Auth.isLogin, Auth.isAdmin, LawyerController.removeLawyer);


module.exports = { lawyerRouter: router }