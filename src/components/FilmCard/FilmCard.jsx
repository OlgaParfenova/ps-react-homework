import { ButtonFavourites } from '../ButtonFavorites';

import RatingIcon from '../../assets/icons/Rating.svg';

import './FilmCard.css';

export const FilmCard = ({ cover, title, rating }) => {
  return (
    <div className='card'>
      <div className='card__backlayer'>
        <img src={cover} alt='' className='card__backlayer-img' />
      </div>
      <div className='card__rating'>
        <img src={RatingIcon} alt='rating' /> {rating}
      </div>
      <div className='card__cover'>
        {cover ? (
          <img src={cover} alt={title} />
        ) : (
          <p className='card__empty'>Обложка не загружена</p>
        )}
      </div>

      <div className='card__title'>{title}</div>
      <ButtonFavourites cl='card__fav-button' />
    </div>
  );
};
