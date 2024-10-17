import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useUsers } from 'store/hooks';
import { AuthForm, Modal } from 'components';

import { FaUserAlt } from 'react-icons/fa';
import { GiExitDoor } from 'react-icons/gi';
import { FaAddressBook } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';

import { Button, Contact, Nav, Span, StyledLink, UserName } from './Nav.styled';
import { ButtonSwitch } from 'components/modal/ModalStyle.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { signOut, user, isAuth } = useUsers();
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

        {isAuth && (
          <StyledLink to="/contacts">
            <FaAddressBook />
            <span> Contacts </span>
          </StyledLink>
        )}

        {isAuth && (
          <NavLink to="/userAccount">
            <UserName>
              <FaRegUserCircle />
              {user && user.name ? user.name : 'Guest'}
            </UserName>
          </NavLink>
        )}

        <Button
          isAuth={isAuth ? isAuth : null}
          type="button"
          onClick={isAuth ? () => handleSignOut() : toggleModal}
        >
          {isAuth ? <GiExitDoor /> : <FaUserAlt />}

          <span>{isAuth ? 'Logout' : 'Login'}</span>
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
