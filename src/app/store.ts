import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import math1Reducer from "../features/math1/math1Slice";
import math2Reducer from "../features/math2/math2Slice";
import math3Reducer from "../features/math3/math3Slice";

export const store = configureStore({
  reducer: {
    math1: math1Reducer,
    math2: math2Reducer,
    math3: math3Reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
