import { createSlice } from "@reduxjs/toolkit";
import {
  saveToken,
  saveUserData,
  removeToken,
  removeUserData,
  getUserData,
} from "@/services";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUserData() || {
      id: "",
      name: "",
      image: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = {
        id: action.payload.user.id,
        name: action.payload.user.name,
        image: action.payload.user.image,
      };
      saveToken(action.payload.token);
      saveUserData(action.payload.user);
    },
    logout: (state, action) => {
      state.user = {
        id: "",
        name: "",
        image: "",
      };
      removeToken();
      removeUserData();
    },
    setNewData: (state, action) => {
      state.user = {
        name: action.payload.user.name,
        image: action.payload.user.image,
      };
      saveUserData(action.payload.user);
    },
  },
});

export const { login, logout, setNewData } = userSlice.actions;

export default userSlice.reducer;
