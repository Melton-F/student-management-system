const express = require('express')
const schoolRouter = require('./Router/sclRtr')
const departmentRouter = require('./Router/deptRtr')
const studentRouter = require('./Router/studRtr')
const app = express()
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// app.use(bodyParser.json())


app.use('/api/v1/school', schoolRouter)
app.use('/api/v1/student', studentRouter)
app.use('/api/v1/department', departmentRouter)

module.exports = app