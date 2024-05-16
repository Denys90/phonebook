import React from 'react';
import List from './List.styled';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectUseContacts } from '../../../store/contacts/selectors';
import { useContacts } from 'Hooks/contactsHook';
import { toast } from 'react-toastify';

const ContactList = () => {
  const filteredContacts = useSelector(selectUseContacts);
  const { removeContact } = useContacts();

  const handleRemoveContact = id => {
    removeContact(id);
    toast.success(`Contact deleted successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return filteredContacts.length > 0 ? (
    <List styles={filteredContacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button onClick={() => handleRemoveContact(id)}>
            <MdDeleteForever size={18} />
          </button>
        </li>
      ))}
    </List>
  ) : null;
};

export default ContactList;
