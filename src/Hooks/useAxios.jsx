// src/Hooks/useAxios.js
import axios from "axios";

// Base axios instance
const axiosInstance = axios.create({
  baseURL: "https://onedrop-server-side.onrender.com", 
});

// Custom hook
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
