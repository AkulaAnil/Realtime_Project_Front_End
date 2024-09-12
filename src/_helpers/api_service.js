// apiService.js
import axios from "axios";
import store from "../store";

const api_service = async (url, method = "GET", data = null, headers = {}) => {
  const { auth_token } = store.getState().login;
  try {
    headers = {
      ...headers,
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth_token,
    };
    url = process.env.REACT_APP_BASE_URL + url;
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    // Handle errors globally
    console.error("API call error:", error);
    throw error;
  }
};

export default api_service;
