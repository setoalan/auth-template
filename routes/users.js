const express = require('express');
const passport = require('passport');

const authentication = require('../controllers/authentication');
const passportService = require('../services/passport');

const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/signup', authentication.signUp);
router.post('/signin', requireSignin, authentication.signIn);

module.exports = router;
