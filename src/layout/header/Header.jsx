import { FaUserAlt } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';

// import { useModalContext } from 'store/context';
import { useUsers } from 'store/hooks';

import { AuthForm, Modal } from 'components';

import { Button, Contact, Nav, Span, StyledLink, UserName } from './Nav.styled';
import { useState } from 'react';
import { ButtonSwitch } from 'components/modal/ModalStyle.styled';

const Header = () => {
  const [buttonSwitch, setButtonSwitch] = useState('Sign Up');
  const [showLoginForm, setShowLoginForm] = useState(true);

  const { isAuthenticated, signOut, user } = useUsers();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowLoginForm(true);
    }
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
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
              <span>Your account</span>
            </UserName>
          </NavLink>
        )}

        <Button
          isAuthenticated={isAuthenticated ? isAuthenticated : null}
          type="button"
          onClick={isAuthenticated ? () => signOut() : toggleModal}
        >
          {isAuthenticated ? <GiExitDoor /> : <FaUserAlt />}

          <span>{isAuthenticated ? 'Logout' : 'Login'}</span>
        </Button>
      </Nav>

      {isOpen && (
        <Modal onClose={toggleModal}>
          <AuthForm showLoginForm={showLoginForm} toggleModal={toggleModal} />

          <ButtonSwitch onClick={toggleForm}>
            {buttonSwitch ? 'Sign Up' : 'Sign In'}
          </ButtonSwitch>
        </Modal>
      )}
    </>
  );
};

export default Header;
