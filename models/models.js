const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

const City = mongoose.model('City', citySchema);
const User = mongoose.model('User', userSchema);

module.exports = { City, User };