const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, signup, login } = require('../controllers/users-controller');
const fileUpload = require('../middleware/file-upload');
const router = Router();

router.get('/', getUsers);

router.post('/signup', fileUpload.single('image'), [check('name').notEmpty(), check('email').normalizeEmail().isEmail(), check('password').isLength({ min: 5 })], signup);

router.post('/login', login);

module.exports = router;
