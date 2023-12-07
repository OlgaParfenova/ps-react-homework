import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);

  const setLoginValue = (value) => {
    setIsLogined(value);
  };
  return (
    <UserContext.Provider value={{ isLogined, setLoginValue }}>{children}</UserContext.Provider>
  );
};
