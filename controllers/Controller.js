'use strict'

class Controller {

    static homepage(req, res) {
        res.render('home')
    }

}

module.exports = { Controller };