import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const applicationsSlice = createSlice({
  name: "Application",

  initialState,

  reducers: {
    setApplicationsData: (state, action) => {
      state.data = action.payload;
    },

    addApplication: (state, action) => {
      state.data.push(action.payload);
    },

    removeApplication: (state, action) => {
      state.data = state.data.filter(
        (application) => application.id !== action.payload
      );
    },

    updateApplication: (state, action) => {
      const index = state.data.findIndex(
        (application) => application.id === action.payload.id
      );

      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
});

export const {
  setApplicationsData,
  addApplication,
  removeApplication,
  updateApplication,
} = applicationsSlice.actions;

export const applicationsReducer = applicationsSlice.reducer;