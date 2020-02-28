'use strict'

const { Lawyer, User, LawyerUser } = require('../models')

class LawyerController {

    static show(req, res) {
        Lawyer.findAll({
            where: {
                role: 'lawyer'
            },
            order: [['id', 'ASC']]
        }).then(result => {
            res.render('lawyers-table', { lawyers: result })
        }).catch(err => {
            res.send(err);
        })
    }
    static showProfile(req, res) {
        Lawyer.findAll(
            {
                where: {
                    role: 'lawyer'
                },
                order: [['name', 'ASC']]
            }
        ).then(result => {
            // res.render('profile', { lawyers: result })
            res.send(result)
        }).catch(err => {
            res.send(err)
        })
    }

    static updateForm(req, res) {
        let id = +req.params.id;
        Lawyer.findByPk(id).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
    static updateLawyer(req, res) {
        let id = +req.params.id;
        let { name, username, password, email, phone, specialist, profile, pic_link, occupied_status, role } = req.body

        Lawyer.update({
            name, username, password, email, phone, specialist, profile, pic_link, occupied_status, role
        }, {
            where: {
                id
            }
        }).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    }

    static removeLawyer(req, res) {
        let id = +req.params.lawyerId
        Lawyer.destroy({ where: { id } }).then(result => {
            res.redirect('/')
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = { LawyerController };