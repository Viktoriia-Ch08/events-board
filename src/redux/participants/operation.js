import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addParticipant = createAsyncThunk(
  'participant/addParticipant',
  async ({ id, user }, thunkAPI) => {
    try {
      const response = await axios.post(`/events/${id}/participants`, user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllParticipants = createAsyncThunk(
  'participants/fetchAllParticipants',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/events/${id}/participants`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
