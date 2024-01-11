import { FC } from 'react';
import { ButtonFavourites } from '../ButtonFavorites';
import { FilmRating } from '../FilmRating';
import { Paragraph } from '../Paragraph';
import { FilmDescriptionProps } from './FilmDescription.props';
import { FilmDescriptionDetails } from '../FilmDescriptionDetails';
import styles from './FilmDescription.module.css';

export const FilmDescription: FC<FilmDescriptionProps> = ({
  description,
  rating,
  poster,
  release,
  runtime,
  genres,
}) => {
  return (
    <div className={styles['film__description']}>
      <img src={poster} alt='афиша фильма' className={styles['film__poster']} />
      <div className={styles['film__info']}>
        <Paragraph type='large' className={styles['film__info-paragraph']}>
          {description}
        </Paragraph>
        <div className={styles['film__info-rating']}>
          <FilmRating rating={rating} />
          <ButtonFavourites />
        </div>
        <FilmDescriptionDetails label='Тип' text='Movie' />
        <FilmDescriptionDetails label='Дата выхода' text={release} />
        <FilmDescriptionDetails label='Длительность' text={runtime} />
        <FilmDescriptionDetails label='Жанр' text={genres.map(({ name }) => name).join(', ')} />
      </div>
    </div>
  );
};
