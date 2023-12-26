import { FC } from 'react';
import { ButtonFavourites } from '../ButtonFavorites';
import { FilmRating } from '../FilmRating';
import { Paragraph } from '../Paragraph';
import { FilmDescriptionProps } from './FilmDescription.props';
import { FilmDescriptionDetails } from '../FilmDescriptionDetails';
import poster from '../../assets/images/film-poster-demo.png'
import styles from './FilmDescription.module.css';

const details = [
  {
    label: 'Тип',
    text: 'Movie',
  },
  {
    label: 'Дата выхода',
    text: '2019-04-24',
  },
  {
    label: 'Длительность',
    text: '181 мин',
  },
  {
    label: 'Жанр',
    text: 'Adventure, Science Fiction, Action',
  },
];

export const FilmDescription: FC<FilmDescriptionProps> = ({ description, rating, poster }) => {
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
        {details.map((detail) => (
          <FilmDescriptionDetails key={detail.label} label={detail.label} text={detail.text} />
        ))}
      </div>
    </div>
  );
};
