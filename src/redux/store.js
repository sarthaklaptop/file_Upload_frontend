import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './slices/fileSlice';
import { fetchFiles, incrementViewCountAsync } from './fileThunks';

const store = configureStore({
  reducer: {
    files: fileReducer,
  },
});

export { fetchFiles, incrementViewCountAsync }; // Export the async thunk
export default store;