import axios from "axios";
import { getToken } from "./token.js";
const token = getToken();
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url, params = {}) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
      params,
    };
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const post = async (url, data) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const put = async (url, data) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const remove = async (url) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
