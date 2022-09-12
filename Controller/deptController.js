const Department = require('../Models/depMdl')

const getDept = async (req, res)=>{
    // const dept = await Department.find()
    const dept = new Department({
        deptName:req.body.deptName,
        _id: mongoose.Types.ObjectId(),
        sclID: req.body.sclID
    })
    res.status(200).json({
        status:'number of department showed',
        results: dept.length,
        data:{
            Dapartments:dept
        }
    })
}

const createDept = async (req, res)=>{
    try{
        const newDept = await Department.create(req.body)
        res.status(201).json({
        status:'data created',
        data:{
            createdData:newDept
        }
    })
    }catch(err){
        res.status(400).json({
            status:"fail",
            error:err
        })
    }
}
module.exports ={
    getDept, createDept
} 