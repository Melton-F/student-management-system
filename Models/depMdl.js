const mongoose = require('mongoose')

const deptSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    deptName:String,
    // sclID: {type:mongoose.Schema.Types.ObjectId,ref:'School' ,required : true},
})

const Department = mongoose.model('Department', deptSchema)

module.exports = Department