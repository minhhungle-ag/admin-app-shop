import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Auto attach token to request if available in local storage
  const token = sessionStorage.getItem("token");
  if (config && token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Do something before request is sent
  return config;
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    const axiosData = response.data.data;
    return axiosData;
  },

  function (error) {
    // Clean up token if 401
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(
      new Error(error?.response?.data?.message || "Something went wrong!")
    );
  }
);

export default axiosClient;
