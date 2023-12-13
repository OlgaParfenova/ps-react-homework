import { FC } from 'react';
import classNames from 'classnames';
import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';

export const NavbarButton: FC<NavbarButtonProps> = ({ text, icon, label, className, ...props }) => {
  return (
    <button {...props} type='button' className={classNames(styles['navbar__link'], className)}>
      {text}
      {icon ? <img src={icon} alt='' className={styles['navbar__link-icon']} /> : null}
      {label ? <div className={styles['navbar__link-label']}>{label}</div> : null}
    </button>
  );
};
