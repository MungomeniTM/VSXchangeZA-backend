const User = require('../models/User');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('posts');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'User not found' });
  }
};

exports.getUsersByLocation = async (req, res) => {
  try {
    const { location, skill } = req.query;
    const filter = {};

    if (location) filter.location = location;
    if (skill) filter.skill = skill;

    const users = await User.find(filter);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users by location' });
  }
};
