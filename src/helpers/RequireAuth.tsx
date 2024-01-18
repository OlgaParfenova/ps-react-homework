import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsLogined } from '../context/UserContext';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const isLogined = useIsLogined();
  if (!isLogined) {
    return <Navigate to='/login' />;
  }
  return children;
};
