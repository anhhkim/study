import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { createProblemList } from "./math1API";
import { RootState } from "../../app/store";
import { CommonProblem } from "../../app/common/math1Digit";

export type Problem1 = CommonProblem & {
  num1: number;
  num2: number;
  num3: number;
  ops: string;
}

export interface Math1State {
  list: Problem1[];
  current: number;
  correct: number;
}

const initialState: Math1State = {
  list: createProblemList(),
  current: 0,
  correct: 0,
};

export const math1Slice = createSlice({
  name: "math1",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    next: (state: Draft<Math1State>) => {
      if (state.current+1 < state.list.length) {
        state.current++;
      }
    },
    selectAnswer: (state: Draft<Math1State>, action: PayloadAction<number>) => {
      if (action.payload === state.list[state.current].answer) {
        state.correct++;
      } else {
        state.list.push(state.list[state.current]);
      }
    },
  },
});

export const { next, selectAnswer } = math1Slice.actions;

export const selectProblem = (state: RootState) =>
  state.math1.list[state.math1.current];
export const selectTotal = (state: RootState) => state.math1.list.length;
export const selectCorrect = (state: RootState) => state.math1.correct;
export const selectCurrent = (state: RootState) => state.math1.current;

export default math1Slice.reducer;
