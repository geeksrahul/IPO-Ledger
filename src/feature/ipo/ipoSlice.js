import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    data: [],
}

const ipoSlice = createSlice({
    name: "IPO",
    initialState,
    reducers: {
        setIPOs : (state, action) => {
            state.data = action.payload;
        },
        addIPO : (state, action) => {
            state.data.push(action.payload);
        },
        updateIPO : (state, action) => {
            const index = state.data.findIndex(ipo => ipo.id === action.payload.id);
            if(index !== -1) {
                state.data[index] = action.payload.data;
            }
        },
        removeIPO : (state, action) => {
            state.data = state.data.filter(ipo => ipo.id !== action.payload);
        } 
    }
});

export const {setIPOs, addIPO, removeIPO, updateIPO} = ipoSlice.actions;

export const ipoReducer = ipoSlice.reducer;