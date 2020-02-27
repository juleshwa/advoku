'use strict'

class UserController {

    static show(req, res) {
        res.send('This is clients list')
    }

}

module.exports = { UserController };