import axios from "axios";
const API = process.env.REACT_APP_API;
console.log(API);

export const getCustomer = async () => {
  try {
    const { data } = await axios.get(`${API}/Customer`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const createCustomer = async () => {
  try {
    const { data } = await axios.post(`${API}/Customer`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const updateCustomer = async (CustomerId) => {
  try {
    const { data } = await axios.put(`${API}/Customer/${CustomerId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const deleteCustomer = async (CustomerId) => {
  try {
    const { data } = await axios.delete(`${API}/Customer/${CustomerId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};
