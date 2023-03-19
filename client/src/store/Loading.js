import { createSlice } from "@reduxjs/toolkit";

const Loading = createSlice({
    name:"load",
    initialState:{isLoading:false},
    reducers:{
        startLoading(state){
            state.isLoading = true;
        },
        stopLoading(state){
            state.isLoading = false;
        }
    }
})

export const loadingActions = Loading.actions;
export default Loading;