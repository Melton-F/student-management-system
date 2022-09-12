const School = require("../Models/sclMdl");

const getSchool = async (req, res) => {
  const school = await School.find().populate("student");
  res.status(200).json({
    status: "number of schools showed",
    results: school.length,
    data: {
      school,
    },
  });
};

const createSchool = async (req, res) => {
  try {
    const newSchool = await School.create(req.body);
    res.status(201).json({
      status: "data created",
      data: {
        school: newSchool,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

module.exports = {
  getSchool,
  createSchool,
};
