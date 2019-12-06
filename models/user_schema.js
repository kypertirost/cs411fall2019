var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleid: String,
  username: String
});


const User = mongoose.model('user', userSchema);

module.exports = User;
