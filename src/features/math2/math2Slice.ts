import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { createProblemList } from "./math2API";
import { RootState } from "../../app/store";
import { CommonProblem } from "../../app/common/math1Digit";

export type Problem2 = CommonProblem & {
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  ops1: string;
  ops2: string;
}

export interface Math2State {
  list: Problem2[];
  current: number;
  correct: number;
}

const initialState: Math2State = {
  list: createProblemList(),
  current: 0,
  correct: 0,
};

export const math2Slice = createSlice({
  name: "math2",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    next: (state: Draft<Math2State>) => {
      if (state.current+2 < state.list.length) {
        state.current++;
      }
    },
    selectAnswer: (state: Draft<Math2State>, action: PayloadAction<number>) => {
      if (action.payload === state.list[state.current].answer) {
        state.correct++;
      } else {
        state.list.push(state.list[state.current]);
      }
    },
  },
});

export const { next, selectAnswer } = math2Slice.actions;

export const selectProblem = (state: RootState) =>
  state.math2.list[state.math2.current];
export const selectTotal = (state: RootState) => state.math2.list.length;
export const selectCorrect = (state: RootState) => state.math2.correct;
export const selectCurrent = (state: RootState) => state.math2.current;

export default math2Slice.reducer;
