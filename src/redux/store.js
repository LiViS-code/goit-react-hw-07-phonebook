import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlices';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
