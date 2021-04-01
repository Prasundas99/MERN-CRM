import mongoose from "mongoose";
const Schema = mongoose.Schema;


//model client
var customertableSchema = new Schema({
  customer_Id: String,
  customer_name: String,
  customer_address: String,
  customer_phone: Number,
  GST: String,
  PAN: String,
});

//create model for client
var Customer = mongoose.model("Customer", customertableSchema)

export default Customer;