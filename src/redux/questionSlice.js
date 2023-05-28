// questionSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  userAnswers: [],
  totalCorrectAnswers: 0,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
      state.userAnswers = new Array(action.payload.length).fill("");
      state.totalCorrectAnswers = 0;
    },
    setUserAnswer: (state, action) => {
      const { index, value, isCorrectAnswer } = action.payload;
      state.userAnswers[index] = value;
      if (isCorrectAnswer) {
        state.totalCorrectAnswers++;
      }
    },
    resetAnswers: (state) => {
      state.userAnswers = new Array(state.questions.length).fill("");
      state.totalCorrectAnswers = 0;
    },
  },
});

export const { setQuestions, setUserAnswer, resetAnswers } = questionSlice.actions;

export default questionSlice.reducer;
