import { configureStore } from "@reduxjs/toolkit";
import { authReducer, applicantsReducer, bankReducer } from "../feature";

const store = configureStore({
    reducer:{
        auth: authReducer,
        applicants: applicantsReducer,
        bank: bankReducer
    }
})



export default store;