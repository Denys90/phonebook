import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from 'store/hooks';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useUsers();

  const location = useLocation();

  return isAuth ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
