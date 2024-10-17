import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllContactsThunk,
  addContactThunk,
  deleteContactThunk,
  patchContactThunk,
} from './thunks';
import { handleFulfilled, handlePending, handleReject } from './hendlers';

interface Contacts {
  id: string;
  name: string;
  phone: string;
}

interface ContactState {
  contacts: Contacts[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const extraActions = [getAllContactsThunk, addContactThunk, deleteContactThunk];

const getActions = (type: keyof typeof getAllContactsThunk) =>
  extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        getAllContactsThunk.fulfilled,
        (state, { payload }: PayloadAction<Contacts[]>) => {
          state.contacts = payload;
        }
      )
      .addCase(
        addContactThunk.fulfilled,
        (state, { payload }: PayloadAction<Contacts>) => {
          state.contacts = [...state.contacts, payload];
        }
      )
      .addCase(
        deleteContactThunk.fulfilled,
        (state, { payload }: PayloadAction<{ id: string }>) => {
          state.contacts = state.contacts.filter(
            contact => contact.id !== payload.id
          );
        }
      )
      .addCase(
        patchContactThunk.fulfilled,
        (state, { payload }: PayloadAction<Contact>) => {
          const index = state.contacts.findIndex(
            contact => contact.id === payload.id
          );
          if (index !== -1) {
            state.contacts[index] = payload;
          }
        }
      )
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
