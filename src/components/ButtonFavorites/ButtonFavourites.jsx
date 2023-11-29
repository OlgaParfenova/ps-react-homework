import { useState } from 'react';

import AddFavourites from '../../assets/icons/AddFavourites.svg';
import AddedToFavourites from '../../assets/icons/AddedToFavourites.svg';

import './ButtonFavourites.css';

export const ButtonFavourites = ({ cl }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <button
      type='button'
      className={`button__favourites ${isFavourite ? 'added' : 'add'} ${cl}`}
      onClick={() => setIsFavourite(!isFavourite)}>
      {isFavourite ? (
        <img src={AddedToFavourites} alt='в избранном' className='button__icon' />
      ) : (
        <img src={AddFavourites} alt='добавить в избранное' className='button__icon' />
      )}

      {isFavourite ? 'В избранном' : 'В избранное'}
    </button>
  );
};
