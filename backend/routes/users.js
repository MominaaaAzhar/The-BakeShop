const express = require('express');
const router = express.Router();
const { getUsers, updateUserAdminStatus } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', authMiddleware, adminMiddleware, getUsers);
router.put('/:id', authMiddleware, adminMiddleware, updateUserAdminStatus);

module.exports = router;
