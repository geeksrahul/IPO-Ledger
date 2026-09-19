import { configureStore } from "@reduxjs/toolkit";
import { authReducer, applicantsReducer, bankReducer, dematReducer } from "../feature";

const store = configureStore({
    reducer:{
        auth: authReducer,
        applicants: applicantsReducer,
        bank: bankReducer,
        demat: dematReducer
    }
})



export default store;