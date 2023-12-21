import { Title, FilmCard } from '../../components';
import { SpotBlue, SpotNavy, SpotGreen, SpotPurple } from '../../layout';
import styles from './FavoritesPage.module.css';
import BW from '../../assets/images/1.png';
import SC from '../../assets/images/2.png';
import LOKI from '../../assets/images/3.png';

const filmsInfo = [
  { id: 'black-widow', title: 'Black widow', rating: 325, cover: BW },
  { id: 'shang-chi', title: 'Shang Chi', rating: 124, cover: SC },
  { id: 'loki', title: 'Loki', rating: 235, cover: LOKI },
];

export const FavoritesPage = () => {
  return (
    <div className={styles['favorites__page']}>
      <SpotBlue />
      <SpotNavy />
      <SpotGreen />
      <SpotPurple />
      <Title className={styles['favorites__page-title']}>Избранное</Title>
      <div className={styles['favorites__page-films']}>
        {filmsInfo.map((element) => (
          <FilmCard
            key={element.title}
            id={element.id}
            title={element.title}
            rating={element.rating}
            cover={element.cover}
          />
        ))}
      </div>
    </div>
  );
};
