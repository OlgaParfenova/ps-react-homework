import { Outlet } from 'react-router-dom';
import { UserContextProvider } from '../../context/UserContext';
import { Navbar } from '../../layouts';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <div className={styles['outlet']}>
          <Outlet />
        </div>
      </UserContextProvider>
    </>
  );
};
