import { useState, useRef, MouseEvent, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Title, Search, Button, Paragraph, FilmCardGrid, FilmsList } from '../../components';
import { SpotBlue, SpotNavy } from '../../layouts';
import { API_KEY } from '../../helpers';
import { Result, Root } from '../../types';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [films, setFilms] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
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
      setIsLoading(true);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      const response = await axios.get<Root>(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: API_KEY,
          },
        },
      );
      setFilms(response.data.results);
      setIsLoading(false);
    } catch (err) {
      console.error('error:' + err);
      if (err instanceof AxiosError) setError(err.message);
      setIsLoading(false);
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
        {error && <Paragraph type='medium'>{error}</Paragraph>}
        {!isLoading && <FilmsList films={films} />}
        {isLoading && <Paragraph type='medium'>Идет загрузка ...</Paragraph>}
      </FilmCardGrid>
    </div>
  );
};
