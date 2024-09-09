// controllers/UserController.js
const User = require('../models/User');

// Check if user exists
exports.checkUserExists = async (req, res) => {
  const { phone } = req.body;

  try {
    const user = await User.findOne({ phone });

    if (user) {
      return res.status(200).send('user exists');
    } else {
      return res.status(200).send('new user');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Authenticate user
exports.authenticateUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send('Incorrect password');
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Register new user
exports.registerUser = async (req, res) => {
  const { phone, firstName, lastName, email, password } = req.body;

  try {
    console.log('Registering user:', req.body);
    const user = new User({ phone, firstName, lastName, email, password });
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send('Error registering user');
  }
};

// Logout user (for session-based auth)
exports.logoutUser = (req, res) => {
  // Implement session destruction or token invalidation logic
  res.status(200).send('User logged out');
};
