const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

const User = require('../models/user');

dotenv.load();

const dbURI = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_URI}`;

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  MongoClient.connect(dbURI, (err, database) => {
    if (err) { return next(err); }

    const Users = database.collection('Users');

    Users.findOne({ email }, (err, existingUser) => {
      if (err) { return next(err); }

      if (existingUser) { res.status(422).send({ error: 'Email already taken' }); }

      const user = new User({ email, password });

      Users.save(user, (err) => {
        if (err) { return next(err); }

        database.close();
      });
    });
  });
};
