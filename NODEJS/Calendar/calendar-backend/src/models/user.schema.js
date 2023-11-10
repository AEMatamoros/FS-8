const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('userModal', userSchema);
