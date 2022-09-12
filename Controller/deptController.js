const Department = require("../Models/depMdl");

const getDept = async (req, res) => {
  const department = await Department.find();
  res.status(200).json({
    status: "number of department showed",
    results: department.length,
    data: {
      Dapartments: department,
    },
  });
};

const createDept = async (req, res) => {
  const newDepartment = new Department(req.body);
  newDepartment
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "new Department Created",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        status: "fail",
        error: err,
      });
    });
};

const getDepartmentByID = async (req, res, next) => {
  const departmentbyID = await Department.findById(req.params.id).populate(
    schoolID
  );
  res.status(200).json({
    status: "success",
    data: {
      department: departmentbyID,
    },
  });
};
module.exports = {
  getDept,
  createDept,
  getDepartmentByID,
};
