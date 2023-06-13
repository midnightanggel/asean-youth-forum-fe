const TOKEN_KEY = "access_token";
const USER = "user_data";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUserData = () => {
  return localStorage.getItem(USER);
};

export const saveToken = (accessToken) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(accessToken));
};

export const saveUserData = (userData) => {
  localStorage.setItem(USER, JSON.stringify(userData));
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const removeUserData = () => {
  localStorage.removeItem(USER);
};
