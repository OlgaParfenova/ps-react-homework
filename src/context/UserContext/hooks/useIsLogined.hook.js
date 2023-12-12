import { useContext } from 'react';
import { UserContext } from '../user.context';

export const useIsLogined = () => {
  const context = useContext(UserContext);
  if (context && context.user !== null) {
    return true;
  }
  return false;
};
