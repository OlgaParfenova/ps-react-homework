import { NavbarButton } from '../NavbarButton';

import Logo from '../../assets/icons/Logo.svg';
import MyFilms from '../../assets/icons/MyFilms.svg';
import Login from '../../assets/icons/Login.svg';

import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <a href='#'>
          <img src={Logo} alt='Логотип' className='navbar__logo' />
        </a>
        <div className='navbar__buttons'>
          <NavbarButton text='Поиск фильмов' />
          <NavbarButton text='Мои фильмы' icon={MyFilms} />
          <NavbarButton text='Войти' icon={Login} />
        </div>
      </div>
    </div>
  );
};
