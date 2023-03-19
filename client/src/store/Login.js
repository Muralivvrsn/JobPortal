import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name: "log",
  initialState: { isLogin: false },
  reducers: {
    hasLogin(state) {
      state.isLogin = true;
    },
    hasNotLogin(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = Login.actions;
export default Login;
