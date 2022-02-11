import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from './api/requests';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await getContacts();
    return result.data;
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async contactData => {
    const result = await addContact(contactData);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const result = await removeContact(id);
    return result.data;
  }
);
