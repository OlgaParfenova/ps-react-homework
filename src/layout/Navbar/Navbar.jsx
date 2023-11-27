import { Link } from 'react-router-dom';

import { NavbarButton } from '../NavbarButton';

import Logo from '../../assets/icons/Logo.svg';
import Login from '../../assets/icons/Login.svg';

import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <Link to='/'>
          <img src={Logo} alt='Логотип' className='navbar__logo' />
        </Link>
        <div className='navbar__buttons'>
          <NavbarButton text='Поиск фильмов' />
          <NavbarButton text='Мои фильмы' label='1' />
          <NavbarButton text='Войти' icon={Login} />
        </div>
      </div>
    </div>
  );
};
