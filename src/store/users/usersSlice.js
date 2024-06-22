import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUpThunk,
  loginThunk,
  currentUserThunk,
  logoutThunk,
} from './thunks';
import { handleFulfilled, handlePending, handleRejected } from './handles';
import { getActions } from '../servises/getActions';

const initialState = {
  token: null,
  hasError: null,
  isRefreshing: false,
  profile: { name: '', email: '' },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.profile = payload.user;
        state.token = payload.token;
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.profile = payload.user;
        state.token = payload.token;
      })

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.profile = payload.user;
      })

      .addCase(logoutThunk.fulfilled, () => {
        return { ...initialState };
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
