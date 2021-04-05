import mongoose from "mongoose";
const Schema = mongoose.Schema;

//model Product
var producttableSchema = new Schema({
  product_name: String,
  product_description: String,
  product_price: String,
  product_intro_date: Date,
  GST: String,
  product_inventry_flag: Boolean,
});

//create model for Product
var Product = mongoose.model("product", producttableSchema);

export default Product;
