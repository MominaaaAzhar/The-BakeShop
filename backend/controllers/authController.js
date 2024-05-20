const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log({ username, email, password })
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json('User not found');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json('Invalid password');
    const token = jwt.sign({ id: user._id }, 'secretkey');
    res.json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
};
