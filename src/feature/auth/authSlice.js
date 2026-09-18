import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData : {},
    loginStatus : false,
}

const authSlice = createSlice({
    name: "Auth", 
    initialState,
    reducers : {
        login : (state, action) => {
            state.userData = action.payload;
            state.loginStatus = true;
        },
        logout : (state) => {
            state.userData = {},
            state.loginStatus = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;