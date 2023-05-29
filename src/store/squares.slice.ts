import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISquare {
  id: any
}

const initialState: Array<ISquare> | [] = []

const squareSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    addSquare(state: ISquare[], action: PayloadAction<ISquare>) {
      state.unshift(action.payload)
    },
    removeSquare(state, action: PayloadAction<null>) {
      state.pop()
    }
  },
});

export const {addSquare, removeSquare} = squareSlice.actions;

export default squareSlice.reducer;