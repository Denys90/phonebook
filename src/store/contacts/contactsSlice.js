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
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(patchContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
