const express = require('express');
const authentication = require('../controllers/authentication');
const passport = require('passport');
const passportService = require('../services/passport');
const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

console.log(authentication.signIn);

router.post('/signup', authentication.signUp);
router.post('/signin', requireSignin, authentication.signIn);

module.exports = router;
