import  product  from "../model/productTable.js";


//Read
export const getProduct = async (req, res) => {
  try {
    const Product = await product.find();
    res.status(200).json(Product);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};


//Create
export const createProduct = async (req, res) => {
  const Product = req.body;
  console.log(Product);
  const newProduct = new product(Product);
  try {
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


//Update
export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const Product = req.body;



  const updatedProduct = await product.findByIdAndUpdate(
    _id,
    { ...Product, _id },
    { new: true }
  );

  res.status(200).json(updatedProduct);
};


//Delete
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await product.findByIdAndDelete(id);
    res.status(200).send({ message: "Deletion of Product user succesful" });
  } catch (error) {
    console.log("error");
    res.status(404).json({ message: error });
  }
};