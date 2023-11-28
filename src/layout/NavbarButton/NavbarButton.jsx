import { Link } from 'react-router-dom';

import styles from './NavbarButton.module.css';

export const NavbarButton = ({ text, icon, label }) => {
  return (
    <Link to='#' className={styles['navbar__link']}>
      {text}
      {icon ? <img src={icon} alt='' className={styles['navbar__link-icon']} /> : null}
      {label ? <div className={styles['navbar__link-label']}>{label}</div> : null}
    </Link>
  );
};
