const mongoose = require("mongoose");

const sclSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const School = mongoose.model("School", sclSchema);

module.exports = School;
