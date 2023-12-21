import { FC } from 'react';
import { FilmRatingProps } from './FilmRating.props';
import classNames from 'classnames';
import RatingIcon from '../../assets/icons/Rating.svg';
import styles from './FilmRating.module.css';

export const FilmRating: FC<FilmRatingProps> = ({ rating, className, ...props }) => {
  return (
    <div {...props} className={classNames(styles['film__rating'], className)}>
      <img src={RatingIcon} alt='rating' /> {rating}
    </div>
  );
};

