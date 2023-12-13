import { FC } from 'react';
import { ButtonFavourites } from '../ButtonFavorites';
import { FilmCardProps } from './FilmCard.props';
import RatingIcon from '../../assets/icons/Rating.svg';
import styles from './FilmCard.module.css';

export const FilmCard: FC<FilmCardProps> = ({ cover, title, rating }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__backlayer']}>
        <img src={cover} alt='' className={styles['card__backlayer-img']} />
      </div>
      <div className={styles['card__rating']}>
        <img src={RatingIcon} alt='rating' /> {rating}
      </div>
      <div className={styles['card__cover']}>
        {cover ? (
          <img src={cover} alt={title} />
        ) : (
          <p className={styles['card__empty']}>Обложка не загружена</p>
        )}
      </div>
      <div className={styles['card__title']}>{title}</div>
      <ButtonFavourites className={styles['card__fav-button']} />
    </div>
  );
};
