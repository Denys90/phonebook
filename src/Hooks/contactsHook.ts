import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectFilter } from '../store/contacts/selectors';

import { setFilter } from '../store/contacts/filterSlice.js';
import * as operations from '../store/contacts/thunks';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const fetchAllContacts = useCallback(() => {
    dispatch(operations.getAllContactsThunk());
  }, [dispatch]);

  const addContact = useCallback(
    contact => {
      dispatch(operations.addContactThunk(contact));
    },
    [dispatch]
  );

  const removeContact = useCallback(
    contactId => {
      dispatch(operations.deleteContactThunk(contactId));
    },
    [dispatch]
  );

  const patchContact = useCallback(
    updateContacts => {
      dispatch(operations.patchContactThunk(updateContacts));
    },
    [dispatch]
  );

  const filterContacts = value => dispatch(setFilter(value));

  return {
    contacts,
    filter,
    setFilter,
    fetchAllContacts,
    addContact,
    removeContact,
    filterContacts,
    patchContact,
  };
};
