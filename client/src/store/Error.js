import { createSlice } from "@reduxjs/toolkit";

const Error = createSlice({
    name:"check",
    initialState:{isError:false},
    reducers:{
        hasError(state){
            state.isError = true
        },
        hasNoError(state){
            state.isError = false
        }
    }
})
export const errorActions = Error.actions;

export default Error