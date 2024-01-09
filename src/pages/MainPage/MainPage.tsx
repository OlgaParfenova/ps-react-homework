import { useState, useRef, MouseEvent, useEffect } from 'react';

import { Title, Search, Button, Paragraph, FilmCard, FilmCardGrid } from '../../components';
import { SpotBlue, SpotNavy } from '../../layouts';

import { URL, OPTIONS, PICTURE_URL } from '../../helpers';
import { Result } from '../../types';

import styles from './MainPage.module.css';

export const MainPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [films, setFilms] = useState<Result[]>([]);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    if (!searchRef.current) {
      return;
    }
    searchRef.current.focus();
  };

  const getFilms = async () => {
    try {
      const response = await fetch(URL, OPTIONS);
      if (!response.ok) return;
      const data = await response.json();
      console.log(data.results);
      setFilms(data.results);
    } catch (err) {
      console.error('error:' + err);
      return;
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

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
      <FilmCardGrid>
        {films.map((element) => (
          <FilmCard
            key={element.id}
            id={element.id}
            title={element.title}
            rating={element.vote_average}
            cover={PICTURE_URL + element.poster_path}
          />
        ))}
      </FilmCardGrid>
    </div>
  );
};
