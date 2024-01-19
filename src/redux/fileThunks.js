// src/redux/fileThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  const response = await axios.get('https://smart-farme.onrender.com/api/v1/fetchImages');
  console.log("data=>", response.data.data)
  return response.data.data;
});



export const incrementViewCountAsync = createAsyncThunk('files/incrementViewCount', async (fileId) => {
  const response = await axios.post(`https://smart-farme.onrender.com/api/v1/view/${fileId}`);
  return response.data.views;
});
