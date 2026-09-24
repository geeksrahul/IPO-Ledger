import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
}

const bankSlice = createSlice({
    name: "Bank",
    initialState,
    reducers: {
        setBankAccountData : (state, action) => {
            state.data = action.payload;
        },
        addBankAccount : (state, action) => {
            state.data.push(action.payload);
        },
        removeBankAccount : (state, action) => {
            state.data = state.data.filter(account => account.id !== action.payload);
        },
        updateBankAccount : (state, action) => {
            const index = state.data.findIndex(account => account.id === action.payload.id);
            if(index !== -1) {
                state.data[index] = action.payload.data;
            }
        }
    }
});

export const {setBankAccountData, addBankAccount, removeBankAccount, updateBankAccount} = bankSlice.actions;
export const bankReducer = bankSlice.reducer;