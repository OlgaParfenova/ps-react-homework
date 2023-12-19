import styles from './NavbarButton.module.css';

export const NavbarButton = ({ text, icon, label, onClick }) => {
  return (
    <button type='button' className={styles['navbar__link']} onClick={onClick}>
      {text}
      {icon ? <img src={icon} alt='' className={styles['navbar__link-icon']} /> : null}
      {label ? <div className={styles['navbar__link-label']}>{label}</div> : null}
    </button>
  );
};
