import { useLoaderData } from 'react-router-dom';
import { Subtitle, LabelText, FilmDescription, ReviewItem, Paragraph } from '../../components';
import { Paper, SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import { FilmDetails, ReviewsDetails } from '../../types';
import styles from './MoviePage.module.css';

export const MoviePage = () => {
  const { movie, reviews } = useLoaderData() as { movie: FilmDetails; reviews: ReviewsDetails };

  const formatDate = (reviewDate: string) => {
    let dateObj = new Date(reviewDate);
    let formattedDate =
      dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
    return formattedDate;
  };

  return (
    <>
      <SpotBlue />
      <SpotGreen />
      <SpotNavy />
      <SpotPurple />
      <div className={styles['moviepage__wrapper']}>
        <Paper className={styles['film__title']}>
          <p className={styles['paper__label']}>Поиск фильмов</p>
          <Subtitle type='large'>{movie.title}</Subtitle>
        </Paper>
        <FilmDescription
          description={movie.overview}
          rating={Math.round(movie.vote_average * 10) / 10}
          poster={'https://image.tmdb.org/t/p/original' + movie.poster_path}
          release={movie.release_date}
          runtime={`${movie.runtime} мин`}
          genres={movie.genres}
        />
        <div>
          <LabelText className={styles['reviews__labeltext']}>Отзывы</LabelText>
          {reviews.results.length > 0 ? (
            reviews.results.map((element) => {
              return (
                <ReviewItem
                  key={element.id}
                  title={element.author}
                  date={formatDate(element.created_at)}
                  text={element.content}
                />
              );
            })
          ) : (
            <Paper>
              <Paragraph type='large'>Отзывов пока нет</Paragraph>
            </Paper>
          )}
        </div>
      </div>
    </>
  );
};
