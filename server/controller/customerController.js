import mongoose from "mongoose";

import  Customer  from "../model/customerTable.js";


//Read
export const getCustomer = async (req, res) => {
  try {
    const Customer = await Customer.find();
    res.status(200).json(Customer);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};


//Create
export const createCustomer = async (req, res) => {
  const Customer = req.body;
  console.log(Customer);
  const newCustomer = new Customer(Customer);
  try {
    await newCustomer.save();
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


//Update
export const updateCustomer = async (req, res) => {
  const { id: _id } = req.params;
  const Customer = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send({ message: "no such Message found" });

  const updatedCustomer = await Customer.findByIdAndUpdate(
    _id,
    { ...Customer, _id },
    { new: true }
  );

  res.status(200).json(updatedCustomer);
};


//Delete
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send({ message: "Customer file not found" });

  try {
    await Customer.findByIdAndDelete(id);
    res.status(200).send({ message: "Deletion of Customer user succesful" });
  } catch (error) {
    console.log("error");
    res.status(404).json({ message: error });
  }
};