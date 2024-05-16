import ContactList from 'components/contacts/ContactList/ContactList';
import ContactsForm from 'components/contacts/ContactsForm/ContactsForm';
import ContactFilter from 'components/contacts/ContactFilter/ContactFilter';

const Contacts = () => {
  return (
    <>
      <ContactsForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};
export default Contacts;
