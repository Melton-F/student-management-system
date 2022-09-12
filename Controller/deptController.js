const Department = require('../Models/depMdl')

const getDept = async (req, res)=>{
    const department = await Department.find()
    res.status(200).json({
        status:'number of department showed',
        results: department.length,
        data:{
            Dapartments:department
        }
    })
}

const createDept = async (req, res)=>{
    try{
        const newDepartment = await Department.create(req.body)
        // const newDepartment = new Department({
        //     deptName:req.body.deptName,
        //     _id: mongoose.Types.ObjectId(),
        //     sclID: req.body.sclID
        // })
        res.status(201).json({
        status:'data created',
        data:{
            createdData:newDepartment
        }
    })
    }catch(err){
        res.status(400).json({
            status:"fail",
            error:err
        })
    }
}


const getDepartmentByID = async(req, res, next)=>{
    const departmentbyID = await Department.findById(req.params.id).populate(schoolID)
    res.status(200).json({
        status:'success',
        data:{
            department:departmentbyID
        }
    })
}
module.exports ={
    getDept, createDept, getDepartmentByID
} 