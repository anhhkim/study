import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { createProblemList } from "./math3API";
import { RootState } from "../../app/store";
import { CommonProblem } from "../../app/common/math1Digit";

export type Problem1 = CommonProblem & {
  num1: number;
  num2: number;
  num3: number;
  ops: string;
}

export interface Math3State {
  list: Problem1[];
  current: number;
  correct: number;
}

const initialState: Math3State = {
  list: createProblemList(),
  current: 0,
  correct: 0,
};

export const math3Slice = createSlice({
  name: "math3",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    next: (state: Draft<Math3State>) => {
      if (state.current+1 < state.list.length) {
        state.current++;
      }
    },
    selectAnswer: (state: Draft<Math3State>, action: PayloadAction<number>) => {
      if (action.payload === state.list[state.current].answer) {
        state.correct++;
      } else {
        state.list.push(state.list[state.current]);
      }
    },
  },
});

export const { next, selectAnswer } = math3Slice.actions;

export const selectProblem = (state: RootState) =>
  state.math3.list[state.math3.current];
export const selectTotal = (state: RootState) => state.math3.list.length;
export const selectCorrect = (state: RootState) => state.math3.correct;
export const selectCurrent = (state: RootState) => state.math3.current;

export default math3Slice.reducer;
