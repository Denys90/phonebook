import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from 'store/hooks';

const PublicRoute = ({ children }) => {
  const { isAuth } = useUsers();

  const { state: prevLocation } = useLocation();

  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PublicRoute;
