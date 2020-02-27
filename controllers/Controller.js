'use strict'
const { Lawyer, User, LawyerUser } = require('../models')

class Controller {

    static homepage(req, res) {
        res.render('home')
    }

    static register(req, res) {
        let { name, username, email, password, phone, role } = req.body;
        if (role === 'lawyer' || role === 'admin') {
            Lawyer.create().then(result => {
                res.send(req.body);
            }).catch(err => { res.send(err) });
        } else {
            User.create().then(result => {
                res.send(req.body);
            }).catch(err => {
                res.send(err)
            })
        }
    }

    static login(req, res) {
        let { username, password } = req.body
        // Stepnya, cek di User, lalu di klien, cari rolenya, kalau admin, masuk direct dashboard admin, kalau lawyer, dashboard lawyer, masuk daftar lawyers (/lawyers);
        res.send(req.body)
    }

    static logout(req, res) {
        res.send(req.body);
    }


}

module.exports = { Controller };