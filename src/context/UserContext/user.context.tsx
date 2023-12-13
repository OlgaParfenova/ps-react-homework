import { createContext, useMemo, useState, FC, PropsWithChildren } from 'react';
import { getUserFromLocalStorage, setUserToLocalStorage } from './utils';
import { User } from './user.context.props';

export const UserContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<User | null>(getUserFromLocalStorage());

  const setUser = (user: User | null) => {
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
