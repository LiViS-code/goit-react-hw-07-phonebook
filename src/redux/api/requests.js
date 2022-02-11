import { http } from './http-common';

export const getContacts = () => {
  return http.get('/contacts');
};

export const addContact = data => {
  return http.post('/contacts', data);
};

export const removeContact = id => {
  return http.delete(`/contacts/${id}`);
};
