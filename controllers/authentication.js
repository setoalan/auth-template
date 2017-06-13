const dotenv = require('dotenv');
const jwt = require('jwt-simple');

const User = require('../models/user');

dotenv.load();

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, createdAt: timestamp }, process.env.TOKEN_SECRET);
}

exports.signIn = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

exports.signUp = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email already is in use' });
    }

    const user = new User({ email, password });

    user.save((err) => {
      if (err) { return next(err); }

      res.json({ token: tokenForUser(user) });
    });
  });
};
