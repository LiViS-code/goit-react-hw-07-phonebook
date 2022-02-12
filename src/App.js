import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container, Logo, Title, ContactsTitle, Message } from './App.styled';
import toastMsg from './utils/toastMsg';
import phonebook from './img/phonebook.png';
import { addNewContact, fetchContacts, deleteContact } from 'redux/asyncThunks';
import { setFilter } from 'redux/contactSlices';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function App() {
  const dispatch = useDispatch();
  const { contacts, loading, filter } = useSelector(
    state => state.phonebook,
    shallowEqual
  );

  console.log('filter', filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onContactsGroup = contacts.length !== 0 ? true : false;
  const onContactsFilter = contacts.length >= 2 ? true : false;

  const onChangeState = (name, number) => {
    if (matchCheckName(name, contacts)) {
      toastMsg(name, 'warn');
      return 'not success';
    }

    dispatch(addNewContact({ id: nanoid(), name, number }));

    toastMsg(name, 'success');

    return 'success';
  };

  const matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  const onDelete = (id, name) => {
    dispatch(deleteContact(id));

    toastMsg(name, 'info');

    if (contacts.length <= 2) {
      onFilter('');
    }
  };

  const onFilter = word => {
    dispatch(setFilter(word));
    console.log('filter', filter);
  };

  return (
    <Container>
      <Title>
        <Logo src={phonebook} alt="fonebook" width="50px" />
        Phonebook
      </Title>
      <ContactForm onChangeState={onChangeState} />
      {onContactsGroup ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            {onContactsFilter && <Filter onFilter={onFilter} filter={filter} />}
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={onDelete}
            />
          </>
        )
      ) : (
        <Message>You have no saved contacts</Message>
      )}
    </Container>
  );
}
