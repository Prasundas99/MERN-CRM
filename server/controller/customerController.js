import  customer  from "../model/customerTable.js";

//Read
export const getCustomer = async (req, res) => {
  try {
    const Customer = await customer.find();
    res.status(200).json(Customer);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};


//Create
export const createCustomer = async (req, res) => {
  const Customer = req.body;
  const newCustomer = new customer(Customer);
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

  const updatedCustomer = await customer.findByIdAndUpdate(
    _id,
    { ...Customer, _id },
    { new: true }
  );

  res.status(200).json(updatedCustomer);
};


//Delete
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
    try {
    await customer.findByIdAndDelete(id);
    res.status(200).send({ message: "Deletion of Customer user succesful" });
  } catch (error) {
    console.log("error");
    res.status(404).json({ message: error });
  }
};