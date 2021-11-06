import { createSlice } from "@reduxjs/toolkit"
import { IProject } from "../../interface/interface"
import { OPEN_PROYECT_ACTION } from "./OpenProyectAction"


interface IOpenProyectSlice {
    openProyect: IProject
}

const initialState:IOpenProyectSlice = {
    openProyect:{
        id: "",
        title: "",
        description: "",
        link: "",
        item: []
    }
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder
        .addCase(OPEN_PROYECT_ACTION.fulfilled, (state,action)=>{
            state.openProyect = action.payload!
        })
    }
})
export default projectSlice.reducer