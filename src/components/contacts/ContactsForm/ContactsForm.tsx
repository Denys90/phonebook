import React from 'react';
import FormS from './FormS.styled';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useContacts } from 'Hooks/contactsHook';
import { selectUseContacts } from 'store/contacts/selectors';

const ContactsForm = () => {
  const { addContact } = useContacts();
  const filteredContacts = useSelector(selectUseContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    const existingName = filteredContacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!existingName) {
      toast.success('The contact is added to the phone book!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error(`${newContact.name} is already in contacts!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return form.reset();
    }

    addContact(newContact);

    form.reset();
  };

  return (
    <FormS onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter name"
        />
      </label>

      <label htmlFor="number">
        <input
          type="tel"
          name="number"
          id="number"
          required
          placeholder="Enter number"
        />
      </label>
      <button type="submit">Add Contact</button>
    </FormS>
  );
};

export default ContactsForm;
