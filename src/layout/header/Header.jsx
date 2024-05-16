import { FaUserAlt } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';

import { useModalContext } from 'store/context';
import { useUsers } from 'store/hooks';

import { Modal } from 'components';

import { Button, Contact, Nav, Span, StyledLink, UserName } from './Nav.styled';

const Header = () => {
  const { isAuthenticated, signOut } = useUsers();
  const { isOpenModal, toggleModal } = useModalContext();

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
              {/* {user && user.name ? user.name : "Guest"} */}
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

      {isOpenModal && <Modal />}
    </>
  );
};

export default Header;
