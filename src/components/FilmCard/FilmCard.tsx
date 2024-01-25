import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router';
import { ButtonFavourites } from '../ButtonFavorites';
import { FilmCardProps } from './FilmCard.props';
import { FilmRating } from '../FilmRating';
import { Button } from '../Button';
import styles from './FilmCard.module.css';
import { useAppDispatch } from '../../store';
import { removeFavoriteThunk } from '../../store/slices/favorites/thunks';

export const FilmCard: FC<FilmCardProps> = ({ cover, title, rating, id, showDeleteButton }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleMoviePageClick = () => {
    navigate(routes.moviePageURL(id));
  };

  const handleDeleteFavoritesPage = () => {
    dispatch(removeFavoriteThunk(id));
  };

  return (
    <div className={styles['card']}>
      <div className={styles['card__backlayer']}>
        <img src={cover} alt='' className={styles['card__backlayer-img']} />
      </div>
      <FilmRating rating={rating} className={styles['card__rating']} />
      <div className={styles['card__cover']} onClick={handleMoviePageClick}>
        {cover ? (
          <img src={cover} alt={title} />
        ) : (
          <p className={styles['card__empty']}>Обложка не загружена</p>
        )}
      </div>
      <p className={styles['card__title']} onClick={handleMoviePageClick}>
        {title}
      </p>
      <div className={styles['card__buttons-group']}>
        <ButtonFavourites
          rating={rating}
          poster={cover}
          title={title}
          id={id}
          className={styles['card__fav-button']}
        />
        {showDeleteButton && (
          <Button className={styles['card__delete-button']} onClick={handleDeleteFavoritesPage}>
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};
