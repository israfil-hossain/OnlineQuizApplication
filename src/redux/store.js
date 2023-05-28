// import {configureStore,combinedReducers} from '@reduxjs/toolkit';
//  //Call Reducers
//  import { questionReducer } from './question_reducer';
// import { resultReducer } from './result_reducer';

// const rootReducer = combinedReducers({
//     questions:questionReducer,
//     result : resultReducer
// })

// // Create store with reducer 
// export default configureStore({reducer: rootReducer})

// store.js

import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export default store;
