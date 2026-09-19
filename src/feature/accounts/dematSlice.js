import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const dematSlice = createSlice({
    name: "Demat",
    initialState,
    reducers: {
        setDematAccountData : (state, action) => {
            state.data = action.payload;
        },
        addDematAccount : (state, action) => {
            state.data.push(action.payload);
        },
        removeDematAccount : (state, action) => {
            state.data = state.data.filter(account => account.id !== action.payload);
        },
        updateDematAccount : (state, action) => {
            const index = state.data.findIndex(account => account.id === action.payload.id);
            if(index !== -1) {
                state.data[index] = action.payload.data;
            }
        }
    }
});

export const {setDematAccountData, addDematAccount, removeDematAccount, updateDematAccount} = dematSlice.actions;

export const dematReducer = dematSlice.reducer;