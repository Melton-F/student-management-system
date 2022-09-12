const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema({
  deptName: String,
  schoolID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
});

const Department = mongoose.model("Department", deptSchema);

module.exports = Department;
