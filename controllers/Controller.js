'use strict'
const { Lawyer, User, LawyerUser } = require('../models')
const bcrypt = require('bcrypt');


class Controller {

    static homepage(req, res) {
        res.render('home')
    }

    static register(req, res) {
        let { name, username, email, password, phone, role } = req.body;
        if (role === 'lawyer' || role === 'admin') {
            Lawyer.create({
                name, username, email, password, phone, role
            }).then(result => {
                res.redirect('/');
            }).catch(err => { res.send(err) });
        } else {
            User.create(name, username, email, password, phone, role).then(result => {
                res.redirect('/');
            }).catch(err => {
                res.send(err)
            })
        }
    }

    static login(req, res) {
        let { username, password, role } = req.body
        if (role === 'admin') {
            Lawyer.findOne({
                where: {
                    username,
                    role
                }
            }).then(found => {
                let check = bcrypt.compareSync(password, found.password);
                return Promise.all([check, found, Lawyer.findAll({ where: { role: 'lawyer' } })]);
            }).then(result => {

                let status = result[0];
                let admin = result[1];
                let lawyers = result[2];
                if (status) {
                    req.session.login = true;
                    req.session.role = 'admin';
                    res.render('dashboard-admin', { admin, lawyers });
                } else {
                    let error = new Error(`Cannot Login`);
                    res.send(error.message);
                }
            }).catch(err => {
                res.send(err);
            })
        } else if (role === 'lawyer') {
            Lawyer.findOne({
                where: {
                    username,
                    role
                }
            }).then(found => {
                let check = bcrypt.compareSync(password, found.password);
                return Promise.all([check, found, LawyerUser.findAll({
                    where: {
                        LawyerId: found.id
                    },
                    include: [User]
                })]);
            }).then(result => {
                let status = result[0];
                let lawyer = result[1];
                let users = result[2]
                if (status) {
                    req.session.login = true;
                    req.session.role = 'lawyer';
                    res.render('dashboard-lawyer', { lawyer, users });
                } else {
                    let error = new Error(`Cannot Login`);
                    res.send(error.message);
                }
            }).catch(err => {
                res.send(err);
            })
        } else {
            User.findOne({
                where: {
                    username,
                    role
                }
            }).then(found => {
                let check = bcrypt.compareSync(password, found.password);
                return [check, found, Lawyer.findAll()];
            }).then(result => {
                let status = result[0];
                let user = result[1];
                let lawyers = result[2]
                if (status) {
                    req.session.login = true;
                    req.session.role = 'user',
                        res.send('lawyershowcase', { user, lawyers });
                } else {
                    let error = new Error(`Cannot Login`);
                    res.send(error.message);
                }
            }).catch(err => {
                res.send(err);
            })
        }

    }

    static logout(req, res) {
        req.session.login = false;
        res.redirect('/');
    }

}

module.exports = { Controller };