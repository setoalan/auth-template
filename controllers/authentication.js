const MongoClient = require('mongodb').MongoClient;

const User = require('../models/user');

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

      res.json({ status: 'Successfully signed up'});
    });
  });
};
