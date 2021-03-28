const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//model Product
var customerproductschema = new Schema({
  customer: [
      {
        customerId : String,
        customer_name: String,
      }
  ],
    
  products: [
      {
          product_Id: String,
          product_name: String,
          product_price: String,
      }
  ]
});

//create model for Product
var customerproduct = mongoose.model("customerproduct", customerproductschema)

module.exports = customerproduct;