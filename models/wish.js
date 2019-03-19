//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var WishSchema = new Schema({
  //user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  wish: {type: String, required: true},
  email: {type: String},
  /*date: {type: Date, required: true, default: Date.now},
  realized: Boolean,
  realizeddate: {type: Date, default: Date.now}*/
});

// Virtual for wish's URL
WishSchema
.virtual('url')
.get(function () {
  return '/wish/' + this._id;
});

//// Compile model from schema
//var Wish = mongoose.model('Wish', WishSchema);

//Export model
module.exports = mongoose.model('Wish', WishSchema);
