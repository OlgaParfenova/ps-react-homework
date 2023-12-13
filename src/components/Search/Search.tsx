import { forwardRef, useMemo, ChangeEvent } from 'react';
import classNames from 'classnames';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ placeholder, icon, isButtonClicked, searchValue, setSearchValue }, ref) => {
    const inputClasses = useMemo(() => {
      return classNames(styles['search__input'], {
        [styles['search__input--icon']]: icon,
        [styles['search__input--error']]: isButtonClicked && searchValue === '',
      });
    }, [icon, isButtonClicked, searchValue]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };

    return (
      <div className={styles['search']}>
        <input
          type='text'
          placeholder={placeholder}
          className={inputClasses}
          ref={ref}
          onChange={handleInputChange}
        />
        {icon ? <img src={icon} alt='Поиск' className={styles['search__icon']} /> : null}
      </div>
    );
  },
);

Search.displayName = 'Search';
