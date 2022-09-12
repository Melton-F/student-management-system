const express = require('express')
const deptController = require('../Controller/deptController')


const router = express.Router();

router.route('/').get(deptController.getDept).post(deptController.createDept)

module.exports = router