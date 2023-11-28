import classNames from 'classnames';

import styles from './Search.module.css';

export const Search = ({ placeholder, icon }) => {
  const inputClasses = classNames(styles['search__input'], {
    [styles['search__input--icon']]: icon,
  });

  return (
    <div className={styles['search']}>
      <input type='text' placeholder={placeholder} className={inputClasses} />
      {icon ? <img src={icon} alt='Поиск' className={styles['search__icon']} /> : null}
    </div>
  );
};
