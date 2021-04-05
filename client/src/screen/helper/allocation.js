import axios from "axios";
const API = process.env.REACT_APP_API;
console.log(API);

export const getAllocation = async () => {
  try {
    const { data } = await axios.get(`${API}/Allocation`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const createAllocation = async () => {
  try {
    const { data } = await axios.post(`${API}/Allocation`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const updateAllocation = async (AllocationId) => {
  try {
    const { data } = await axios.put(`${API}/Allocation/${AllocationId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};

export const deleteAllocation = async (AllocationId) => {
  try {
    const { data } = await axios.delete(`${API}/Allocation/${AllocationId}`);
    console.log(data);
    return data;
  } catch (error) {
    const err = error && error.response && error.response.data;
    throw new Error(`${err.message}`);
  }
};
