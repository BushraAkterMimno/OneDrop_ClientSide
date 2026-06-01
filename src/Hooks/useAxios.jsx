// src/Hooks/useAxios.js
import axios from "axios";

// Base axios instance
const axiosInstance = axios.create({
  baseURL: "https://onedrop-serverside-1.onrender.com", 
});

// Custom hook
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
