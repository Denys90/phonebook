import { Navigate, useLocation } from 'react-router-dom';
import { useUsers } from '../store/hooks';
import { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuth } = useUsers();

  const { state: prevLocation } = useLocation();

  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PublicRoute;
