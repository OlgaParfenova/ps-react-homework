import { Link } from 'react-router-dom';

import './NavbarButton.css';

export const NavbarButton = ({ text, icon, label }) => {
  return (
    <Link to='#' className='navbar__link'>
      {text}
      {icon ? <img src={icon} alt='' className='navbar__link-icon' /> : null}
      {label ? <div className='navbar__link-label'>{label}</div> : null}
    </Link>
  );
};
