import { useLoaderData } from 'react-router-dom';
import { Subtitle, LabelText, FilmDescription, ReviewItem } from '../../components';
import { Paper, SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import { FilmDetails } from '../../types';
import styles from './MoviePage.module.css';

const review = {
  title: 'Not as good as infinity war..',
  date: '2019-04-29',
  text: 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could have been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...',
};

export const MoviePage = () => {
  const data = useLoaderData() as FilmDetails;

  console.log('data', data);
  return (
    <>
      <SpotBlue />
      <SpotGreen />
      <SpotNavy />
      <SpotPurple />
      <div className={styles['moviepage__wrapper']}>
        <Paper className={styles['film__title']}>
          <p className={styles['paper__label']}>Поиск фильмов</p>
          <Subtitle type='large'>{data.title}</Subtitle>
        </Paper>
        <FilmDescription
          description={data.overview}
          rating={Math.round(data.vote_average * 10) / 10}
          poster={'https://image.tmdb.org/t/p/original' + data.poster_path}
          release={data.release_date}
          runtime={data.runtime}
          genres={data.genres}
        />
        <div className={styles['reviews']}>
          <LabelText className={styles['reviews-labeltext']}>Отзывы</LabelText>
          <ReviewItem title={review.title} date={review.date} text={review.text} />
        </div>
      </div>
    </>
  );
};
