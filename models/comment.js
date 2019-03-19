//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  onwish_id: {type: Schema.Types.ObjectId, ref: 'Wish', required: true},
  user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  comment: {type: String, required: true, max: 1000},
  date: {type: Date, required: true, default: Date.now}
});

//Export model
module.exports = mongoose.model('Comment', CommentSchema);
