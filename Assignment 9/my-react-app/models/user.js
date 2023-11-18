const mongoose = require('mongoose');

if (mongoose.models.User) {
  module.exports = mongoose.models.User;
} else {
  const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
  });

  const User = mongoose.model('User', userSchema);
  module.exports = User;
}
