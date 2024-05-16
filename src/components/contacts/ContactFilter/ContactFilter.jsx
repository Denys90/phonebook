import React from 'react';
import { Input, SearchContainer } from './FilterS.styled';
import { useContacts } from 'Hooks/contactsHook';
import { selectUseContacts } from 'store/contacts/selectors';
import { useSelector } from 'react-redux';

const ContactFilter = () => {
  const filteredContacts = useSelector(selectUseContacts);
  const { filter, filterContacts } = useContacts();
  return filteredContacts.length > 0 ? (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={e => filterContacts(e.target.value)}
      />
    </SearchContainer>
  ) : null;
};

export default ContactFilter;
