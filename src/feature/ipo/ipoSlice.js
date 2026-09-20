import { createSlice } from "@reduxjs/toolkit";

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
        } 
    }
});

export const {setIPOs, addIPO} = ipoSlice.actions;

export const ipoReducer = ipoSlice.reducer;