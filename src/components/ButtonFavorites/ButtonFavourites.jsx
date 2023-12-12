import { useState, useMemo } from 'react';
import classNames from 'classnames';

import AddFavourites from '../../assets/icons/AddFavourites.svg';
import AddedToFavourites from '../../assets/icons/AddedToFavourites.svg';

import styles from './ButtonFavourites.module.css';

export const ButtonFavourites = ({ cl }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const buttonClasses = useMemo(() => {
    return classNames(
      styles['button__favourites'],
      { [styles['added']]: isFavourite, [styles['add']]: !isFavourite },
      cl,
    );
  }, [cl, isFavourite]);

  const handleButtonClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <button type='button' className={buttonClasses} onClick={handleButtonClick}>
      {isFavourite ? (
        <img src={AddedToFavourites} alt='в избранном' className={styles['button__icon']} />
      ) : (
        <img src={AddFavourites} alt='добавить в избранное' className={styles['button__icon']} />
      )}
      {isFavourite ? 'В избранном' : 'В избранное'}
    </button>
  );
};
