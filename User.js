const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String }, // city or region
  skill: { type: String },    // builder, plumber, electrician etc.
  avatar: { type: String },
  bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
