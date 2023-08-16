import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64dc626ce64a8525a0f66bf7.mockapi.io/contacts';


export const fetchContactsThunk = createAsyncThunk(
     'contacts/fetchContacts',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
       
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', contact);
        return response.data;
    } catch (e) {
              return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "cotacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
       console.log(response)
        return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
