import { Title, FilmCard, FilmCardGrid, Paragraph } from '../../components';
import { SpotBlue, SpotNavy, SpotGreen, SpotPurple } from '../../layouts';
import { useAppSelector } from '../../store';
import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  const items = useAppSelector((state) => state.favoritesSlice.items);

  return (
    <div className={styles['favorites__page']}>
      <SpotBlue />
      <SpotNavy />
      <SpotGreen />
      <SpotPurple />
      <Title className={styles['favorites__page-title']}>Избранное</Title>
      {items.length ? (
        <FilmCardGrid>
          {items.map((element) => (
            <FilmCard
              key={element.title}
              id={element.id}
              title={element.title}
              rating={element.rating}
              cover={element.poster}
              showDeleteButton={true}
            />
          ))}
        </FilmCardGrid>
      ) : (
        <Paragraph type='large'>Здесь пока ничего нет ...</Paragraph>
      )}
    </div>
  );
};

export default FavoritesPage;
