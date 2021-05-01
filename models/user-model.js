const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  register_number: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("User", userSchema);
