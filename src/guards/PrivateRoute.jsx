import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from 'store/hooks';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUsers();

  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
