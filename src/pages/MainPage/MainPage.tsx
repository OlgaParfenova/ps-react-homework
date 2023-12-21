import { useState, useRef, MouseEvent } from 'react';

import { Title, Search, Button, Paragraph, FilmCard } from '../../components';
import { SpotBlue, SpotNavy } from '../../layout';

import BW from '../../assets/images/1.png';
import SC from '../../assets/images/2.png';
import LOKI from '../../assets/images/3.png';
import HIMYM from '../../assets/images/4.png';
import MH from '../../assets/images/5.png';
import FR from '../../assets/images/6.png';
import TBBT from '../../assets/images/7.png';
import TAHM from '../../assets/images/8.png';

import styles from './MainPage.module.css';

const filmsInfo = [
  { id: 'black-widow', title: 'Black widow', rating: 325, cover: BW },
  { id: 'shang-chi', title: 'Shang Chi', rating: 124, cover: SC },
  { id: 'loki', title: 'Loki', rating: 235, cover: LOKI },
  { id: 'how-i-met-your-mother', title: 'How I Met Your Mother', rating: 123, cover: HIMYM },
  { id: 'money-heist', title: 'Money Heist', rating: 8125, cover: MH },
  { id: 'friends', title: 'Friends', rating: 123, cover: FR },
  { id: 'the-big-bang-theory', title: 'The Big Bang Theory', rating: 12, cover: TBBT },
  { id: 'two-and-a-half-men', title: 'Two And a Half Men', rating: 456, cover: TAHM },
];

export const MainPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current?.focus();
  };

  return (
    <div className={styles['search__page']}>
      <SpotBlue />
      <SpotNavy />
      <form>
        <Title className={styles['search__page-title']}>Поиск</Title>
        <Paragraph type='medium' className={styles['search__page-paragraph']}>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <div className={styles['search__page-input']}>
          <Search
            placeholder='Введите название'
            isButtonClicked={isButtonClicked}
            value={searchValue}
            setValue={setSearchValue}
            ref={searchRef}
          />
          <Button onClick={handleButtonClick}>Искать</Button>
        </div>
      </form>
      <div className={styles['search__page-films']}>
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
