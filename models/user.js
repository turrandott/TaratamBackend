//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //name: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100, unique: true},
  password: {type: String, required: true, max: 100}
  //date: {type: Date, required: true, default: Date.now},
});

// Virtual for wish's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);
