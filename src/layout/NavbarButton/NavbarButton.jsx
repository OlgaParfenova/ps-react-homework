import './NavbarButton.css';

export const NavbarButton = ({ text, icon }) => {
  return (
    <a href='#' className='navbar__link'>
      {text}
      {icon && <img src={icon} alt='' className='navbar__icon' />}
    </a>
  );
};
