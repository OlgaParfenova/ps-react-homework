import { createContext, useMemo, useState } from 'react';
import { getUserFromLocalStorage, setUserToLocalStorage } from './utils';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [value, setValue] = useState(getUserFromLocalStorage());

  const setUser = (user) => {
    setUserToLocalStorage(user);
    setValue(user);
  };

  const result = useMemo(
    () => ({
      user: value,
      setUser,
    }),
    [value],
  );

  return <UserContext.Provider value={result}>{children}</UserContext.Provider>;
};
