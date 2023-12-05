import { useState, useRef } from 'react';

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
import SearchIcon from '../../assets/icons/Search.svg';

import styles from './SearchPage.module.css';

const filmsInfo = [
  { title: 'Black widow', rating: '325', cover: BW },
  { title: 'Shang Chi', rating: '124', cover: SC },
  { title: 'Loki', rating: '235', cover: LOKI },
  { title: 'How I Met Your Mother', rating: '123', cover: HIMYM },
  { title: 'Money Heist', rating: '8125', cover: MH },
  { title: 'Friends', rating: '123', cover: FR },
  { title: 'The Big Bang Theory', rating: '12', cover: TBBT },
  { title: 'Two And a Half Men', rating: '456', cover: TAHM },
];

export const SearchPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current.focus();
  };

  return (
    <div className={styles['search__page']}>
      <SpotBlue />
      <SpotNavy />
      <form>
        <Title text='Поиск' cl={styles['search__page-title']} />
        <Paragraph
          text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          type='medium'
          cl={styles['search__page-paragraph']}
        />
        <div className={styles['search__page-input']}>
          <Search
            placeholder='Введите название'
            icon={SearchIcon}
            isButtonClicked={isButtonClicked}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchRef={searchRef}
          />
          <Button text='Искать' handleButtonClick={handleButtonClick} />
        </div>
      </form>
      <div className={styles['search__page-films']}>
        {filmsInfo.map((element) => (
          <FilmCard
            key={element.title}
            title={element.title}
            rating={element.rating}
            cover={element.cover}
          />
        ))}
      </div>
    </div>
  );
};
