import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// ======================================================>
export const signUpThunk = createAsyncThunk(
  'users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);

      token.set(response.data.token);
      if (response.data.token) {
        toast.success('You have successfully registered!');
      }
      return response.data;
    } catch (error) {
      toast.error('You entered incorrect data, try again!');
      return rejectWithValue(error.message);
    }
  }
);

// ======================================================>
export const loginThunk = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);

      if (response.data.token) {
        toast.success('You are successfully logged in!');
      }
      return response.data;
    } catch (error) {
      toast.error('You have entered incorrect data, please try again!');
      return rejectWithValue(error.message);
    }
  }
);

// ======================================================>

export const currentUserThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.users.token;

    if (persistToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistToken);

      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ======================================================>

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
