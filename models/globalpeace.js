//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var GlobalPeaceSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  comment: {type: String, required: true, max: 1000},
  date: {type: Date, required: true}
});

//Export model
module.exports = mongoose.model('GlobalPeace', GlobalPeaceSchema);
