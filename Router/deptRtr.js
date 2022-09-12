const express = require('express')
const deptController = require('../Controller/deptController')


const router = express.Router();

router.route('/:id').get(deptController.getDepartmentByID)
router.route('/').get(deptController.getDept).post(deptController.createDept)

router.route('/:id').get(deptController.getDepartmentByID)

module.exports = router