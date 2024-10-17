import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { getAuth } = useAuth();

  return getAuth().isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
