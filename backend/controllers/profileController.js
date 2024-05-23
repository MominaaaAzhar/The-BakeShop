const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log({user})
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(404).send('Profile not found');
  }
};

const updateProfile = async (req, res) => {
  const { firstName, lastName, phone, avatarTextColor, avatarBgColor } = req.body.profileSettings;

  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.phone = phone || user.phone;
    user.avatarTextColor = avatarTextColor || user.avatarTextColor;
    user.avatarBgColor = avatarBgColor || user.avatarBgColor;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getProfile, updateProfile };
