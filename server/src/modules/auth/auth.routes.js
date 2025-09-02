const router = require('express').Router();
const { register, login, me, logout } = require('./auth.controller');
const { requireAuth } = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', requireAuth, me);

module.exports = router;
