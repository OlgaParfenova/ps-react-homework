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
  const isLogined = useIsLogined();
  const handleLogoutButtonClick = () => {
    setUser(null);
  };

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <Link to='/'>
          <img src={Logo} alt='Logo' className={styles['navbar__logo']} />
        </Link>
        <div className={styles['navbar__buttons']}>
          <NavbarButton to='/' text='Поиск фильмов' />
          <NavbarButton to='/favorites' text='Мои фильмы' label='1' />
          {isLogined ? (
            <>
              <NavbarButton to='/' text={user ? user.name : ''} icon={User} />
              <NavbarButton to='/login' text='Выйти' onClick={handleLogoutButtonClick} />
            </>
          ) : (
            <NavbarButton to='/login' text='Войти' icon={Login} />
          )}
        </div>
      </div>
    </div>
  );
};
