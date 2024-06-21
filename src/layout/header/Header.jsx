import { FaUserAlt } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';

import { useUsers } from 'store/hooks';

import { AuthForm, Modal } from 'components';

import { Button, Contact, Nav, Span, StyledLink, UserName } from './Nav.styled';
import { useState } from 'react';
import { ButtonSwitch } from 'components/modal/ModalStyle.styled';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { isAuthenticated, signOut, user } = useUsers();
  const [isOpen, setIsOpen] = useState(false);

  const buttonType = showLoginForm ? 'Sign Up' : 'Sign In';

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowLoginForm(true);
    }
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignOut = () => {
    signOut();
    toast.info('Successfully logged out');
  };

  return (
    <>
      <Nav>
        <Span>
          find
          <Contact>Contacts</Contact>
        </Span>

        {isAuthenticated && (
          <StyledLink to="/contacts">
            <FaAddressBook />
            <span> Contacts </span>
          </StyledLink>
        )}

        {isAuthenticated && (
          <NavLink to="/userAccount">
            <UserName>
              <FaRegUserCircle />
              {user && user.name ? user.name : 'Guest'}
            </UserName>
          </NavLink>
        )}

        <Button
          isAuthenticated={isAuthenticated ? isAuthenticated : null}
          type="button"
          onClick={isAuthenticated ? () => handleSignOut() : toggleModal}
        >
          {isAuthenticated ? <GiExitDoor /> : <FaUserAlt />}

          <span>{isAuthenticated ? 'Logout' : 'Login'}</span>
        </Button>
      </Nav>

      {isOpen && (
        <Modal onClose={toggleModal}>
          <AuthForm showLoginForm={showLoginForm} toggleModal={toggleModal} />

          <ButtonSwitch onClick={toggleForm}>{buttonType}</ButtonSwitch>
        </Modal>
      )}
    </>
  );
};

export default Header;
