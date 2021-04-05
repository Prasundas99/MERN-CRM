import axios from "axios";
const API = process.env.REACT_APP_API;
console.log(API);

export const getProduct = async () => {
  try {
    const { data } = await axios.get(`${API}/Product`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const createProduct = async () => {
  try {
    const { data } = await axios.post(`${API}/Product`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const updateProduct = async (productId) => {
  try {
    const { data } = await axios.put(`${API}/Product/${productId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const { data } = await axios.delete(`${API}/Product/${productId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};
