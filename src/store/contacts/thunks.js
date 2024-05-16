import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// ==========================================>

export const getAllContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (contactData, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get('/contacts', contactData, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getAllContactsThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);

// ==========================================>

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post('/contacts', contactData, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error addContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ==========================================>

export const patchContactThunk = createAsyncThunk(
  'contacts/patchContact',
  async ({ contactId, ...contact }, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.patch(`/contacts`, contactId, contact, {
        headers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==========================================>

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(`/contacts/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error deleteContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
