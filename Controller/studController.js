const Student = require("../Models/studMdl");
const mongoose = require("mongoose");
const School = require("../Models/sclMdl");

const getStudent = async (req, res) => {
  const stud = await Student.find().exec();
  res.status(200).json({
    status: "number of student showed",
    results: stud.length,
    data: {
      students: stud,
    },
  });
};

const getStudbySclID = async (req, res) => {
  const stud = await Student.find({ schoolID: req.params.id }).exec();
  res.status(200).json({
    status: "number of student showed",
    results: stud.length,
    data: {
      students: stud,
    },
  });
};

const createStud = async (req, res, next) => {
  // const newDept = await Student.create(req.body)
  const student = new Student({
    studentName: req.body.studentName,
    departmentID: req.body.departmentID,
    schoolID: req.body.schoolID,
  });

  student
    .save()
    .then(async (result) => {
      await school(School, req.body.schoolID, result._id, res);

      res.status(201).json({
        message: "new Student Created",
        createdProduct: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "fail",
        error: err,
      });
    });
};
// const school = (School, schoolId, _id, res) => {
//   return new Promise((resolve, reject) => {
//     School.findById(schoolId, (err, data) => {
//       if (err) return res.send(err);
//       console.log(data);
//       data.student.push(_id);
//       data.save(resolve(data));
//     });
//   });
// };
module.exports = {
  getStudent,
  createStud,
  getStudbySclID,
};
