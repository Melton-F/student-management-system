const mongoose = require("mongoose");

const StudSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  departmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  schoolID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true
  },
});

const Student = mongoose.model("Student", StudSchema);

module.exports = Student;
