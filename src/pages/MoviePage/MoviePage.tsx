import { Subtitle, LabelText, FilmDescription, ReviewItem } from '../../components';
import { Paper, SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import styles from './MoviePage.module.css';
import img from '../../assets/images/film-poster-demo.png';

const description = {
  text: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  rating: 8.3,
  poster: img,
};

const review = {
  title: 'Not as good as infinity war..',
  date: '2019-04-29',
  text: 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could have been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...',
};

export const MoviePage = () => {
  return (
    <>
      <SpotBlue />
      <SpotGreen />
      <SpotNavy />
      <SpotPurple />
      <div className={styles['moviepage__wrapper']}>
        <Paper className={styles['film__title']}>
          <p className={styles['paper__label']}>Поиск фильмов</p>
          <Subtitle type='large'>Avengers: Endgame</Subtitle>
        </Paper>
        <FilmDescription
          description={description.text}
          rating={description.rating}
          poster={description.poster}
        />
        <div className={styles['reviews']}>
          <LabelText className={styles['reviews-labeltext']}>Отзывы</LabelText>
          <ReviewItem title={review.title} date={review.date} text={review.text} />
        </div>
      </div>
    </>
  );
};
