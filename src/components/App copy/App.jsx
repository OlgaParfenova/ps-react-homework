import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Navbar } from '../../layout';

import { MainPage, NotFoundPage, LoginPage } from '../../pages';

import styles from './App.module.css';

export const App = () => {
  const navigate = useNavigate();

  const [isLogined, setIsLogined] = useState(() => {
    const auth = localStorage.getItem('user');
    if (auth === null) return false;
    const authObj = JSON.parse(auth);
    if (!('isLogined' in authObj)) return false;
    return authObj.isLogined;
  });

  useEffect(() => {
    if (!isLogined) {
      navigate('/login');
    }
  }, [isLogined, navigate]);

  return (
    <Router>
      <Navbar />
      <div className={styles['app-wrapper']}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};
