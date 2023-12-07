import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../../layout';
import { CheckLogin } from '../CheckLogin';
import { MainPage, NotFoundPage, LoginPage } from '../../pages';
import { UserContextProvider } from '../../context';

import styles from './App.module.css';

export const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <CheckLogin />
        <Navbar />
        <div className={styles['app-wrapper']}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
};
