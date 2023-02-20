import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  postContact,
} from 'services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchContacts();
      return res;
    } catch {
      return rejectWithValue();
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteContact(id);
      return res;
    } catch {
      return rejectWithValue();
    }
  }
);

export const postContactThunk = createAsyncThunk(
  'users/postUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await postContact();
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);
