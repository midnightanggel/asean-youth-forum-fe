import { createSlice } from "@reduxjs/toolkit";
import {
  saveToken,
  saveUserData,
  removeToken,
  removeUserData,
} from "@/services";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
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
      console.log("login");
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
