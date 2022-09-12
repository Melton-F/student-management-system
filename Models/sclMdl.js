const mongoose = require('mongoose')

const sclSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const School = mongoose.model('School', sclSchema)

module.exports = School