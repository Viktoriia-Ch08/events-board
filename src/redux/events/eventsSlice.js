import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchEvents, fetchLimitedEvents, fetchNextEvents } from "./operations";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    limitedEvents: [],
    registeredUsers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = [...action.payload.events];
      })
      .addCase(fetchLimitedEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.limitedEvents = [...action.payload];
      })
      .addCase(fetchNextEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.limitedEvents = [...action.payload];
      })
      .addMatcher(
        isAnyOf(
          fetchEvents.pending,
          fetchLimitedEvents.pending,
          fetchNextEvents.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEvents.rejected,
          fetchLimitedEvents.rejected,
          fetchNextEvents.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { filterEvents } = eventsSlice.actions;
