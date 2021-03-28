const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model login
var logintableSchema = new Schema({
  login_Id: String,
  login_name: String,
  login_description: String,
  login_price: String,
  login_intro_date: Date,
  GST: String,
  login_inventry_flag: Boolean,
});

//create model for login
var login = mongoose.model("login", logintableSchema)

module.exports = login;