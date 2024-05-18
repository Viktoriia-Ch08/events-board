import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addParticipant, fetchAllParticipants } from './operation';

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    participants: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.participants
          ? state.participants.push(action.payload)
          : (state.participants = [...action.payload]);
      })
      .addCase(fetchAllParticipants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.participants = [...action.payload];
      })
      .addMatcher(
        isAnyOf(addParticipant.pending, fetchAllParticipants.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(addParticipant.rejected, fetchAllParticipants.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const participantsReducer = participantsSlice.reducer;
