import axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://media-app-first.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": token ? token : "",
  },
});

export default axiosInstance;

export const axiosFileInstance = axios.create({
  baseURL: "https://media-app-first.herokuapp.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    "x-auth-token": token ? token : "",
  },
});
