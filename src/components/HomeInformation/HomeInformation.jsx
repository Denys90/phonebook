import { useUsers } from 'store/hooks';
import { InformHome } from '../../layout/header/Nav.styled';

const HomeInformation = () => {
  const { isLoginedUser } = useUsers();
  return (
    <>
      {!isLoginedUser ? (
        <InformHome>
          <h1>Welcome to findContacts!</h1>

          <p>
            To access all features, <span>create</span> or <span>log in</span>{' '}
            to your account. Registration takes just a few minutes!
          </p>
        </InformHome>
      ) : null}
    </>
  );
};

export default HomeInformation;
