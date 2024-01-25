import { Link } from 'react-router-dom';
import { routes } from '../../router';
import { useAppDispatch } from '../../store';
import { logoutThunk } from '../../store/slices/user/thunks';
import { useAppSelector } from '../../store/store';
import { NavbarButton } from '../NavbarButton';
import Logo from '../../assets/icons/Logo.svg';
import Login from '../../assets/icons/Login.svg';
import User from '../../assets/icons/User.svg';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const { items } = useAppSelector((state) => state.favoritesSlice);
  const dispatch = useAppDispatch();

  const filmNumber = items.length;

  const handleLogoutButtonClick = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <Link to={routes.mainPageURL}>
          <img src={Logo} alt='Logo' className={styles['navbar__logo']} />
        </Link>
        <div className={styles['navbar__buttons']}>
          <NavbarButton to={routes.mainPageURL} text='Поиск фильмов' />
          <NavbarButton to={routes.favoritesPageURL} text='Мои фильмы' label={filmNumber} />
          {user ? (
            <>
              <NavbarButton to={routes.favoritesPageURL} text={user.name} icon={User} />
              <NavbarButton
                to={routes.loginPageURL}
                text='Выйти'
                onClick={handleLogoutButtonClick}
              />
            </>
          ) : (
            <NavbarButton to={routes.loginPageURL} text='Войти' icon={Login} />
          )}
        </div>
      </div>
    </div>
  );
};
