const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
    maxlength: [30, "name cannot be morethan 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
