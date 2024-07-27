const mongoose = require('mongoose');

// MongoDB schema definition for user data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;