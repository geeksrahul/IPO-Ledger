import { configureStore } from "@reduxjs/toolkit";
import { authReducer, applicantsReducer } from "../feature";

const store = configureStore({
    reducer:{
        auth: authReducer,
        applicants: applicantsReducer
    }
})



export default store;