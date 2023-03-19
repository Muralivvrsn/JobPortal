import { configureStore } from "@reduxjs/toolkit";
import  Error  from "./Error";
import Login from "./Login"
import Loading from "./Loading";
const store = configureStore({
    reducer:{
        check:Error.reducer,
        log:Login.reducer,
        load:Loading.reducer
    }
})
console.log(store)
export default store;