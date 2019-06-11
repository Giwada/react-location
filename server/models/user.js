var mongoose = require('mongoose')
var Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: String,
  password: String,
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', userSchema);