import { useUsers } from 'store/hooks';
import { InformHome } from '../../layout/header/Nav.styled';
import { AuthForm, Modal } from 'components';

import { InfoBtn } from './HomeInformation.styled';
import { useState } from 'react';
import { ButtonSwitch } from 'components/modal/ModalStyle.styled';

const HomeInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState('Sign Up');
  const [showLoginForm, setShowLoginForm] = useState(true);

  const { isLoginedUser } = useUsers();

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowLoginForm(true);
    }
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleCreateClick = () => {
    setShowLoginForm(false);
    setIsOpen(true);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setIsOpen(true);
  };

  return (
    <>
      {!isLoginedUser ? (
        <InformHome>
          <h1>Welcome to findContacts!</h1>

          <p>
            To access all features,
            <InfoBtn type="button" onClick={handleCreateClick}>
              create
            </InfoBtn>
            or
            <InfoBtn type="button" onClick={handleLoginClick}>
              log in
            </InfoBtn>
            to your account. Registration takes just a few minutes!
          </p>
        </InformHome>
      ) : null}

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

export default HomeInformation;
