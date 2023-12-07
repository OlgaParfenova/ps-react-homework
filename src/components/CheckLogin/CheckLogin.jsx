import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context';

export const CheckLogin = () => {
  const { isLogined, setLoginValue } = useContext(UserContext);

  const navigate = useNavigate();

  const [isInitialApp, setIsInitialApp] = useState(true);

  const [isLoginedValue, setIsLoginedValue] = useState(() => {
    const auth = localStorage.getItem('user');
    if (auth === null) return false;
    const authObj = JSON.parse(auth);
    if (!('isLogined' in authObj)) return false;
    return authObj.isLogined;
  });

  useEffect(() => {
    if (isInitialApp) {
      if (!isLoginedValue) {
        setIsLoginedValue(false);
        setLoginValue(false);
        navigate('/login');
        setIsInitialApp(false);
        return;
      }
      setIsLoginedValue(true);
      setLoginValue(true);
      setIsInitialApp(false);
      return;
    }

    const authObj = JSON.parse(localStorage.getItem('user')) || {};
    authObj.isLogined = isLogined;
    localStorage.setItem('user', JSON.stringify(authObj));

    setIsLoginedValue(isLogined);
    if (!isLogined) {
      navigate('/login');
    }
  }, [isLoginedValue, navigate, setLoginValue, isLogined, isInitialApp]);

  return null;
};
