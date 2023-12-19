import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext, useIsLogined } from '../../context/UserContext';

import { NavbarButton } from '../NavbarButton';

import Logo from '../../assets/icons/Logo.svg';
import Login from '../../assets/icons/Login.svg';
import User from '../../assets/icons/User.svg';

import styles from './Navbar.module.css';

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const isLogined = useIsLogined();
  const handleLogoutButtonClick = () => {
    setUser(null);
  };
  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <Link to='/'>
          <img src={Logo} alt='Logo' className={styles['navbar__logo']} />
        </Link>
        <div className={styles['navbar__buttons']}>
          <NavbarButton text='Поиск фильмов' />
          <NavbarButton text='Мои фильмы' label='1' />
          {isLogined ? (
            <>
              <NavbarButton text={user ? user.name : ''} icon={User} />
              <NavbarButton text='Выйти' onClick={handleLogoutButtonClick} />
            </>
          ) : (
            <NavbarButton text='Войти' onClick={handleLoginButtonClick} icon={Login} />
          )}
        </div>
      </div>
    </div>
  );
};
