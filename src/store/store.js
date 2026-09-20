import { configureStore } from "@reduxjs/toolkit";
import { authReducer, applicantsReducer, bankReducer, dematReducer, ipoReducer } from "../feature";

const store = configureStore({
    reducer:{
        auth: authReducer,
        applicants: applicantsReducer,
        bank: bankReducer,
        demat: dematReducer,
        ipo: ipoReducer,
    }
})



export default store;