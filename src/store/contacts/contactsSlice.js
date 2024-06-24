import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllContactsThunk,
  addContactThunk,
  deleteContactThunk,
  patchContactThunk,
} from './thunks';
import { handleFulfilled, handlePending, handleReject } from './hendlers';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const extraActions = [getAllContactsThunk, addContactThunk, deleteContactThunk];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(patchContactThunk.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        if (index !== -1) {
          state.contacts[index] = payload;
        }
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
