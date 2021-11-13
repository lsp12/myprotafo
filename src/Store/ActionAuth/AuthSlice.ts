import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../interface/interface";
import { FaildLogin, getUserLogeed } from "./AuthReducer";

const initialState: IAuth = {
  authenticated: false,
  user: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogeed.fulfilled, (state, action) => {
      state.user = action.payload!;
      state.authenticated = true;
    });
    builder.addCase(FaildLogin.fulfilled, (state, action: AnyAction) => {
      state.authenticated = action.payload!;
    });
  },
});

export default auth.reducer;
