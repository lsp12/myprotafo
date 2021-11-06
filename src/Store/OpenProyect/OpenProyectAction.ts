import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProject } from "../../interface/interface";

export const OPEN_PROYECT_ACTION = createAsyncThunk("project/OpenProyect",async (data: IProject)=>{
    return data;
})