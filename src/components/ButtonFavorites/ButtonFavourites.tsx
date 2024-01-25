import { useMemo, FC } from 'react';
import classNames from 'classnames';
import { ButtonFavouritesProps } from './ButtonFavourites.props';
import AddFavourites from '../../assets/icons/AddFavourites.svg';
import AddedToFavourites from '../../assets/icons/AddedToFavourites.svg';
import { useAppDispatch, useAppSelector } from '../../store';
import styles from './ButtonFavourites.module.css';
import { addFavoriteThunk } from '../../store/slices/favorites/thunks';

export const ButtonFavourites: FC<ButtonFavouritesProps> = ({
  className,
  id,
  title,
  rating,
  poster,
}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favoritesSlice.items);
  const isFavourite = favorites.some((item) => item.id === id);
  const buttonClasses = useMemo(() => {
    return classNames(
      styles['button__favourites'],
      { [styles['added']]: isFavourite, [styles['add']]: !isFavourite },
      className,
    );
  }, [className, isFavourite]);

  const handleButtonClick = () => {
    dispatch(addFavoriteThunk({ id, title, rating, poster }));
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
