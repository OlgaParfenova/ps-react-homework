import { useNavigate } from 'react-router-dom';
import { useIsLogined } from '../../context/UserContext';
import { useEffect } from 'react';

export const CheckLogin = (): null => {
  const isLogined = useIsLogined();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogined) navigate('/login');
  }, [isLogined, navigate]);
  return null;
};
