const { Schema, model } = require("mongoose");

const taskSchema = Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  bgcolor: {
    type: String,
    trim: true,
    required: true,
  },
  notes: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = model("taskModel", taskSchema);
