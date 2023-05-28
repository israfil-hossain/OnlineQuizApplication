import {createSlice } from "@reduxjs/toolkit";


// create reducer
export const questionReducer = createSlice({
    name: 'questions',
    initialState:{
        queue:[],
        answers:[],
        trace: 0
    }, 
    resucers:{
        startExamAction : (state, action)=>{
            return {
                ...state,
                queue:action.payload
            }
        }
    }
})