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
