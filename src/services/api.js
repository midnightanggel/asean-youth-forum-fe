import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url, params = {}, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const post = async (url, data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const put = async (url, data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const remove = async (url, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
