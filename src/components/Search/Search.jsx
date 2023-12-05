import classNames from 'classnames';

import styles from './Search.module.css';

export const Search = ({
  placeholder,
  icon,
  isButtonClicked,
  searchValue,
  setSearchValue,
  searchRef,
}) => {
  const inputClasses = classNames(styles['search__input'], {
    [styles['search__input--icon']]: icon,
    [styles['search__input--error']]: isButtonClicked && searchValue === '',
  });

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles['search']}>
      <input
        type='text'
        placeholder={placeholder}
        className={inputClasses}
        ref={searchRef}
        onChange={handleInputChange}
      />
      {icon ? <img src={icon} alt='Поиск' className={styles['search__icon']} /> : null}
    </div>
  );
};
