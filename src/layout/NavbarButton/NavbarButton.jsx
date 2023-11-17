import './NavbarButton.css';

export const NavbarButton = ({ text, icon, label }) => {
  return (
    <a href='#' className='navbar__link'>
      {text}
      {icon && <img src={icon} alt='' className='navbar__link-icon' />}
      {label && <div className='navbar__link-label'>{label}</div>}
    </a>
  );
};
