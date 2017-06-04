const mongoose = required('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
