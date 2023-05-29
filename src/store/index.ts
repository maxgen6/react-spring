import { configureStore } from '@reduxjs/toolkit';
import squareReducer from './squares.slice';
export const store = configureStore({
  reducer: {
    squareReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;