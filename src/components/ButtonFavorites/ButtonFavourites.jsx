import { useState } from 'react';

import AddFavourites from '../../assets/icons/AddFavourites.svg';
import AddedToFavourites from '../../assets/icons/AddedToFavourites.svg';

import styles from './ButtonFavourites.module.css';

export const ButtonFavourites = ({ cl }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <button
      type='button'
      className={`${styles['button__favourites']} ${
        isFavourite ? styles['added'] : styles['add']
      } ${cl}`}
      onClick={() => setIsFavourite(!isFavourite)}>
      {isFavourite ? (
        <img src={AddedToFavourites} alt='в избранном' className={styles['button__icon']} />
      ) : (
        <img src={AddFavourites} alt='добавить в избранное' className={styles['button__icon']} />
      )}

      {isFavourite ? 'В избранном' : 'В избранное'}
    </button>
  );
};
