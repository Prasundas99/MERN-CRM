import axios from "axios";
const API = process.env.REACT_APP_API;
console.log(API);

export const signup = async (user) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(`${API}/user/signup`, user, config);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(`${API}/user/login`, user, config);
    console.log(data);
    localStorage.setItem("userCreds", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userCreds");
  }
};

export const emailVerify = async (email) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(
      `${API}/user/email-verify`,
      email,
      config
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (modifiedPassword, accessToken) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(
      `${API}/user/reset-password/${accessToken}`,
      modifiedPassword,
      config
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("userCreds")) {
    return JSON.parse(localStorage.getItem("userCreds"));
  } else {
    return false;
  }
};
