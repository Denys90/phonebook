import { useUsers } from 'store/hooks';
import { InformHome } from '../../layout/header/Nav.styled';
import { Modal } from 'components';
import { useModalContext } from 'store/context';
import { InfoBtn } from './HomeInformation.styled';

const HomeInformation = () => {
  const { isOpenModal, toggleModal } = useModalContext();
  const { isLoginedUser } = useUsers();

  return (
    <>
      {!isLoginedUser ? (
        <InformHome>
          <h1>Welcome to findContacts!</h1>

          <p>
            To access all features,{' '}
            <InfoBtn type="button" onClick={toggleModal}>
              create
            </InfoBtn>{' '}
            or{' '}
            <InfoBtn type="button" onClick={toggleModal}>
              log in
            </InfoBtn>{' '}
            to your account. Registration takes just a few minutes!
          </p>
        </InformHome>
      ) : null}

      {isOpenModal && <Modal />}
    </>
  );
};

export default HomeInformation;
