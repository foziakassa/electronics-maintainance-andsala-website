// lib/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_APP_API ?? "https://saas_web.yenechinet.com/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "9f6f013a-7f58-4ac3-a763-08ee236fe941",
  },
});

// Optionally, you can add interceptors to handle requests or responses

export default axiosInstance;
