import mongoose from "mongoose";
const Schema = mongoose.Schema;


//model client
var customerProducttableSchema = new Schema({
    Customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    Product: { type: Schema.Types.ObjectId, ref: 'product' },
});

//create model for client
var Allocation = mongoose.model("allocation", customerProducttableSchema)

export default Allocation;