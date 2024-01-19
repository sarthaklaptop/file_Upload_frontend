import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'files',
  initialState: [], // initialState should be an array if you're managing an array of files
  reducers: {
    setFiles: (state, action) => {
      return action.payload; // Return the new array of files
    },
    incrementViewCount: (state, action) => {
      const fileToUpdate = state.find((file) => file._id === action.payload);
      if (fileToUpdate) {
        fileToUpdate.views += 1;
      }
    },
  },
});

export const { setFiles, incrementViewCount } = fileSlice.actions;
export default fileSlice.reducer;