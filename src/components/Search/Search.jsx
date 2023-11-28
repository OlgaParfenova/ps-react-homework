import styles from './Search.module.css';

export const Search = ({ placeholder, icon }) => {
  return (
    <div className={styles['search']}>
      <input
        type='text'
        placeholder={placeholder}
        className={`${styles['search__input']} ${icon ? styles['search__input--icon'] : ''}`}
      />
      {icon ? <img src={icon} alt='Поиск' className={styles['search__icon']} /> : null}
    </div>
  );
};
