import React, { ChangeEvent } from 'react';
import { Input, SearchContainer } from './FilterS.styled';

import { useContacts } from '../../../Hooks/contactsHook';
import { selectUseContacts } from '../../../store/contacts/selectors';
import { useSelector } from 'react-redux';

const ContactFilter: React.FC = () => {
  const filteredContacts = useSelector(selectUseContacts);

  const { filter, filterContacts } = useContacts();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterContacts(e.target.value);
  };
  return filteredContacts.length > 0 ? (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
      />
    </SearchContainer>
  ) : null;
};

export default ContactFilter;
