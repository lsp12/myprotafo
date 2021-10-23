import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../interface/interface";
import { getUserLogeed, loginSet } from "./AuthReducer";

const initialState: IAuth = {
    authenticated: false,
    user: {}
    }

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder.addCase(loginSet.fulfilled, (state,action) => {
            state.authenticated = true;
        });
        builder.addCase(getUserLogeed.fulfilled, (state, action)=>{
            state.user = action.payload!;
            state.authenticated = true;
        })
    },
});

export default auth.reducer;