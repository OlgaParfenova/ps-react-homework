import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user === null) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
