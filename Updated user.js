const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  skill: String,
  location: String,
  bio: String,
  profilePic: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('User', userSchema);
