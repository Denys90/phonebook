import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from '../store/hooks';
import { ReactNode } from 'react';
// import { useUsers } from 'store/hooks';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useUsers();

  const location = useLocation();

  return isAuth ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
