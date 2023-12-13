import { useContext } from 'react';
import { UserContext } from '../user.context';

export const useIsLogined = (): boolean => {
  const context = useContext(UserContext);
  return context.user !== null;
};
