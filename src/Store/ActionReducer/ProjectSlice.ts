import {createSlice} from '@reduxjs/toolkit'
import { IProjectState } from '../../interface/interface'
import { getProjects } from './ProjectDBAction'

const initialState: IProjectState = {
  projects: [],
  loading: false,
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(getProjects.pending, (state) => {
            state.loading = true
        })
        .addCase(getProjects.fulfilled, (state, action) => {
            state.projects = action.payload!
            state.loading = false
        })
        .addCase(getProjects.rejected, (state) => {
            state.loading = false
        })
      },
})


export default projectSlice.reducer;