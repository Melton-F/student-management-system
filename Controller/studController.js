const Student = require('../Models/studMdl')
const mongoose = require('mongoose')

const getStudbySclID = async (req, res)=>{
    const stud = await Student.find({schoolID:req.params.id}).populate('schoolID').populate('departmentID').exec()
    res.status(200).json({
        status:'number of student showed',
        results: stud.length,
        data:{
            students:stud
        }
    })
}

const createStud =  (req, res, next)=>{
        // const newDept = await Student.create(req.body)
        const newDept = new Student({
            _id: new mongoose.Types.ObjectId(),
            studentName:req.body.studentName,
            departmentID: req.body.departmentID,
            schoolID: req.body.schoolID
        })
        newDept.save()
        .then(result =>{
            console.log(result);
            res.status(201).json({
                message:'new Department Created',
                createdProduct: result
            });        
        }).catch(err=>{
            res.status(400).json({
            status:"fail",
            error:err
            })
        })
    }

module.exports = {
    createStud, getStudbySclID
} 