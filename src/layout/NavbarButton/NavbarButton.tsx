import { FC } from 'react';
import classNames from 'classnames';
import { NavbarButtonProps } from './NavbarButton.props';
import { NavLink } from 'react-router-dom';
import styles from './NavbarButton.module.css';

export const NavbarButton: FC<NavbarButtonProps> = ({
  text,
  icon,
  label,
  to,
  className,
  ...props
}) => {
  return (
    <NavLink
      to={to}
      {...props}
      type='button'
      className={({ isActive }) =>
        classNames(styles['navbar__link'], className, {
          [styles['active']]: isActive,
        })
      }>
      {text}
      {icon ? <img src={icon} alt='' className={styles['navbar__link-icon']} /> : null}
      {label ? <div className={styles['navbar__link-label']}>{label}</div> : null}
    </NavLink>
  );
};
