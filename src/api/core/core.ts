import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://be-intern.bccdev.id/nayla/api/v1/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
