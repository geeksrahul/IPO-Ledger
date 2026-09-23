import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const applicantsSlice = createSlice({
    name: "Applicant",
    initialState,
    reducers: {
        setApplicantsData : (state, action) => {
            state.data = action.payload;
        },
        addApplicant : (state, action) => {
            state.data.push(action.payload);
        },
        removeApplicant : (state, action) => {
            state.data = state.data.filter(
                applicant => applicant.id !== action.payload 
            )
        },
        updateApplicant : (state, action) => {
            const index = state.data.findIndex(
                applicant => applicant.id === action.payload.id
            )
            if(index !== -1) {
                state.data[index] = action.payload.data;
            }
        }
    }
});

export const {setApplicantsData, addApplicant, removeApplicant, updateApplicant} = applicantsSlice.actions; 
export const applicantsReducer = applicantsSlice.reducer;