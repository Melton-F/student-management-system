const express = require('express')
const studController = require('../Controller/studController')

const router = express.Router()

router.route('/:id')
    .get(studController.getStudbySclID)

router.route('/')
    .get(studController.getStudent)
    .post(studController.createStud)

module.exports = router