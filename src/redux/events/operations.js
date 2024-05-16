import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchEventsData,
  fetchLimitedEventsData,
  fetchNextEventsCards,
} from "../../services/eventsServices";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, thunkAPI) => {
    try {
      const response = await fetchEventsData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLimitedEvents = createAsyncThunk(
  "events/fetchLimitedEvents",
  async (_, thunkAPI) => {
    try {
      const response = await fetchLimitedEventsData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNextEvents = createAsyncThunk(
  "events/fetchNextEvents",
  async (_, thunkAPI) => {
    try {
      const response = await fetchNextEventsCards();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
