import axios from "axios";

//
// import { store } from "./store";
import Cookies from "js-cookie";

//
const API_URL = import.meta.env.VITE_API_URL;


/**
 *
 */
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding Auhorization header to every request if token is available
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("seveti_token");

  //
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//
export default axiosInstance;