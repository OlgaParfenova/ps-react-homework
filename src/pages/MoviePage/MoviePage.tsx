import { Paragraph, Subtitle, LabelText, FilmRating, ButtonFavourites } from '../../components';
import { Paper, SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import poster from '../../assets/images/film-poster-demo.png';
import styles from './MoviePage.module.css';

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
        <div className={styles['film__card']}>
          <img src={poster} alt='афиша фильма' className={styles['film__poster']} />
          <div className={styles['film__info']}>
            <Paragraph type='large' className={styles['film__info-paragraph']}>
              After the devastating events of Avengers: Infinity War, the universe is in ruins due
              to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the
              Avengers must assemble once more in order to undo Thanos' actions and restore order to
              the universe once and for all, no matter what consequences may be in store.
            </Paragraph>
            <div className={styles['film__info-rating']}>
              <FilmRating rating={8.3} />
              <ButtonFavourites />
            </div>
            <div className={styles['film__info-details']}>
              <LabelText className={styles['film__info-details-label']}>Тип</LabelText>
              <Paragraph type='large' className={styles['film__info-details-paragraph']}>
                Movie
              </Paragraph>
            </div>
            <div className={styles['film__info-details']}>
              <LabelText className={styles['film__info-details-label']}>Дата выхода</LabelText>
              <Paragraph type='large' className={styles['film__info-details-paragraph']}>
                2019-04-24
              </Paragraph>
            </div>
            <div className={styles['film__info-details']}>
              <LabelText className={styles['film__info-details-label']}>Длительность</LabelText>
              <Paragraph type='large' className={styles['film__info-details-paragraph']}>
                181 мин
              </Paragraph>
            </div>
            <div className={styles['film__info-details']}>
              <LabelText className={styles['film__info-details-label']}>Жанр</LabelText>
              <Paragraph type='large' className={styles['film__info-details-paragraph']}>
                Adventure, Science Fiction, Action
              </Paragraph>
            </div>
          </div>
        </div>
        <div className={styles['reviews']}>
          <LabelText className={styles['reviews-labeltext']}>Отзывы</LabelText>
          <Paper>
            <div className={styles['reviews-title']}>
              <Subtitle type='medium'>Not as good as infinity war..</Subtitle>
              <LabelText>2019-04-29</LabelText>
            </div>
            <Paragraph type='large'>
              But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and
              effortless feel infinity war somehow managed to accomplish. Some silly plot holes and
              characters that could have been cut (Ahem, captain marvel and thanos). The use of
              Captain marvel in this film was just ridiculous. Shes there at the start, bails for
              some reason? And then pops up at the end to serve no purpose but deux ex machina a
              space ship...
            </Paragraph>
          </Paper>
        </div>
      </div>
    </>
  );
};
