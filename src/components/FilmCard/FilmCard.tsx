import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonFavourites } from '../ButtonFavorites';
import { FilmCardProps } from './FilmCard.props';
import { FilmRating } from '../FilmRating';
import { routes } from '../../router';
import styles from './FilmCard.module.css';

export const FilmCard: FC<FilmCardProps> = ({ cover, title, rating, id }) => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(routes.moviePageURL(id));
  };
  return (
    <div className={styles['card']}>
      <div className={styles['card__backlayer']}>
        <img src={cover} alt='' className={styles['card__backlayer-img']} />
      </div>
      <FilmRating rating={rating} className={styles['card__rating']} />
      <div className={styles['card__cover']} onClick={handleCLick}>
        {cover ? (
          <img src={cover} alt={title} />
        ) : (
          <p className={styles['card__empty']}>Обложка не загружена</p>
        )}
      </div>
      <div className={styles['card__title']} onClick={handleCLick}>
        {title}
      </div>
      <ButtonFavourites className={styles['card__fav-button']} />
    </div>
  );
};
