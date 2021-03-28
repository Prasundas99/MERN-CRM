const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model Product
var producttableSchema = new Schema({
  product_Id: String,
  product_name: String,
  product_description: String,
  product_price: String,
  product_intro_date: Date,
  GST: String,
  product_inventry_flag: Boolean,
});

//create model for Product
var product = mongoose.model("product", producttableSchema)

module.exports = product;