import { createSlice } from "@reduxjs/toolkit";
import { ITechnologyState } from "../../interface/interface";
import { getTechnology, saveTechnology } from "./TechnologyReducer";

const initialState:ITechnologyState ={
save:false,
technology: [],
loading: false
}

const technologySlice =  createSlice({
    name:"technology",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(saveTechnology.fulfilled, state =>{
            state.save=true
        })
        builder
        .addCase(getTechnology.pending,(state)=>{
            state.loading = true
        })
        .addCase(getTechnology.fulfilled, (state, action)=>{
            state.technology = action.payload!;
            state.loading = false;
        })
        .addCase(getTechnology.rejected, (state) => {
            state.loading = false
        })
    }
})

export default technologySlice.reducer;