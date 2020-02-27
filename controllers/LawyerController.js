'use strict'

class LawyerController {

    static show(req, res) {
        res.send('This is List Lawyers')
    }

}

module.exports = { LawyerController };