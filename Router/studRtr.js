const express = require('express')
const studController = require('../Controller/studController')

const router = express.Router()

router.route('/get/:id')
    .get(studController.getStudbySclID)

router.route('/')
    // .get(studController.getStud)
    .post(studController.createStud)

module.exports = router