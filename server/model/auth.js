const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model User
var UsertableSchema = new Schema({
  User_Id: String,
  User_name: String,
  User_description: String,
  User_price: String,
  User_intro_date: Date,
  GST: String,
  User_inventry_flag: Boolean,
});

//create model for User
var User = mongoose.model("User", UsertableSchema)

module.exports = User;


