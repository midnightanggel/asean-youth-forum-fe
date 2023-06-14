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
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = {
        id: action.payload.user.id,
        name: action.payload.user.name,
      };
      saveToken(action.payload.token);
      saveUserData(action.payload.user);
    },
    logout: (state, action) => {
      state.user = {
        id: "",
        name: "",
      };
      removeToken();
      removeUserData();
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
