import { createSlice } from "@reduxjs/toolkit";
import { IProjectState } from "../../interface/interface";
import { getWepPage } from "./WebPageReducer";

const initialState:IProjectState ={
    projects: [],
    loading: false
}
    
    const technologySlice =  createSlice({
        name:"technology",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
        .addCase(getWepPage.pending, (state) => {
            state.loading = true
        })
        .addCase(getWepPage.fulfilled, (state, action) => {
            state.projects = action.payload!
            state.loading = false
        })
        .addCase(getWepPage.rejected, (state) => {
            state.loading = false
        })
        }
    })
    
    export default technologySlice.reducer;