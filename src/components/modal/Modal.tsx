import { useEffect, useRef, useCallback, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import {
  Popup,
  ModalContent,
  CloseButton,
  ModalWrapper,
} from './ModalStyle.styled';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const targetElement = document.getElementById('modalRoot');
  const backdrop = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === backdrop.current) {
        onClose();
        document.body.style.overflow = '';
        document.body.style.position = '';
        event.stopPropagation();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        document.body.style.overflow = '';
        document.body.style.position = '';
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!targetElement) {
    return null;
  }

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
