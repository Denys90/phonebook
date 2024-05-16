import React, { useState } from 'react';
import {
  Popup,
  ModalContent,
  CloseButton,
  ModalWrapper,
  ButtonSwitch,
} from './ModalStyle.styled';
import { createPortal } from 'react-dom';
import AuthForm from 'components/forms/AuthForm';

import { GrClose } from 'react-icons/gr';
import { useModalContext } from 'store/context';
import { useUsers } from 'store/hooks';

const modalRoot = document.querySelector('#modalRoot');

const Modal = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { isAuthenticated } = useUsers();

  const { toggleModal, popupRef } = useModalContext();

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return !isAuthenticated
    ? modalRoot &&
        createPortal(
          <Popup>
            <ModalWrapper ref={popupRef}>
              <ModalContent>
                <CloseButton onClick={toggleModal}>
                  <GrClose />
                </CloseButton>
                <AuthForm showLoginForm={showLoginForm} />

                <ButtonSwitch onClick={handleToggleForm}>
                  {showLoginForm ? 'Sign Up' : 'Sign In'}
                </ButtonSwitch>
              </ModalContent>
            </ModalWrapper>
          </Popup>,
          modalRoot
        )
    : null;
};

export default Modal;
