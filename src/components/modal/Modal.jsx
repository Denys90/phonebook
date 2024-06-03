import {
  Popup,
  ModalContent,
  CloseButton,
  ModalWrapper,
} from './ModalStyle.styled';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';

const Modal = ({ onClose, children }) => {
  const targetElement = document.getElementById('modalRoot');
  const backdrop = useRef();

  const handleClickOutside = event => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = '';
    document.body.style.position = '';
    event.stopPropagation();
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      document.body.style.overflow = '';
      document.body.style.position = '';
      onClose();
    }
  };

  useEffect(() => {
    const eventHandler = e => handleKeyDown(e);
    document.addEventListener('keydown', eventHandler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', eventHandler);
    };
  }, []);

  return ReactDOM.createPortal(
    <Popup onClick={handleClickOutside} ref={backdrop}>
      <ModalWrapper>
        <ModalContent>
          <CloseButton onClick={onClose}>
            <GrClose />
          </CloseButton>
          {children}
        </ModalContent>
      </ModalWrapper>
    </Popup>,
    targetElement
  );
};

export default Modal;
