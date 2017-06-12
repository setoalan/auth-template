const express = require('express');
const authentication = require('../controllers/authentication');
const router = express.Router();

router.post('/signup', authentication.signUp);
router.post('/signin', authentication.signIn)

module.exports = router;
