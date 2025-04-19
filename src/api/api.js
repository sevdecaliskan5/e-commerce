import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: {
      "Content-Type": "application/json", 
      ...(token && { authorization: `Bearer ${token}` }), 
    },
  });
};

export let API;

export const renewAPI = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }

  API = axiosWithAuth(); 
};

renewAPI(localStorage.getItem("token"));
