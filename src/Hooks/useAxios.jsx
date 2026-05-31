// src/Hooks/useAxios.js
import axios from "axios";

// Base axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", 
});

// Custom hook
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
