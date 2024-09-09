// routes/userRoutes.js
const express = require('express');
const { checkUserExists, authenticateUser, registerUser, logoutUser } = require('../controllers/UserController');

const router = express.Router();

router.post('/check-user', checkUserExists);
router.post('/login', authenticateUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);

module.exports = router;
