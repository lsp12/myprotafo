import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  open:string
}

const initialState: CounterState = {
    open: "",
}

export const counterSlice = createSlice({
  name: 'actionOpen',
  initialState,
  reducers: {

    changeList: (state, action: PayloadAction<string>) => {
      state.open = action.payload
    },
  },
  extraReducers:(builder)=>{
    /* builder
      .addCase(stringAction.pending, (state, action) => {
        state.open = action.payload
      }) */
  }
})

// Action creators are generated for each case reducer function
export const { changeList } = counterSlice.actions

export default counterSlice.reducer


