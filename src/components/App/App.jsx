import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Navbar } from '../../layout';
import { CheckLogin } from '../CheckLogin';

import { MainPage, NotFoundPage, LoginPage } from '../../pages';

import styles from './App.module.css';

export const App = () => {
  const [isLogined, setIsLogined] = useState(false);

  const setLoginValue = (value) => {
    setIsLogined(value);
  };

  return (
    <Router>
      <CheckLogin setLoginValue={setLoginValue} isLogined={isLogined} />
      <Navbar isLogined={isLogined} setLoginValue={setLoginValue} />
      <div className={styles['app-wrapper']}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage setLoginValue={setLoginValue} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};
