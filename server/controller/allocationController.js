import mongoose from "mongoose";
import  allocation  from "../model/CustomerProduct.js";


//Read
export const getAllocation = async (req, res) => {
  try {
    const Allocation = await allocation.find().poppulate("Customer").poppulate("product");
    res.status(200).json(Allocation);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};


//Create
export const createAllocation = async (req, res) => {
  const Allocation = req.body;
  console.log(Allocation);
  const newAllocation = new allocation({
      Customer: req.body.CustomerId,
      Product: req.body.productId
  });
  try {
    await newAllocation.save();
    res.status(201).send(newAllocation);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


//Update
export const updateAllocation = async (req, res) => {
  const { id: _id } = req.params;
  const Allocation = req.body;


  const updatedAllocation = await allocation.findByIdAndUpdate(
    _id,
    { ...Allocation, _id },
    { new: true }
  );

  res.status(200).json(updatedAllocation);
};


//Delete
export const deleteAllocation = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send({ message: "Allocation file not found" });

  try {
    await allocation.findByIdAndDelete(id);
    res.status(200).send({ message: "Deletion of Allocation user succesful" });
  } catch (error) {
    console.log("error");
    res.status(404).json({ message: error });
  }
};