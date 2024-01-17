import { useState, useRef, MouseEvent, useEffect, ChangeEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { Title, Search, Button, Paragraph, FilmCardGrid, FilmsList } from '../../components';
import { SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import { API_KEY } from '../../helpers';
import { Result, Root } from '../../types';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [films, setFilms] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
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

  useEffect(() => {
    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResults(filteredFilms);
    setShowNoResults(filteredFilms.length === 0);
  }, [searchQuery, films]);

  return (
    <div className={styles['search__page']}>
      <SpotBlue />
      <SpotNavy />
      <SpotGreen />
      <SpotPurple />
      <form>
        <Title className={styles['search__page-title']}>Поиск</Title>
        <Paragraph type='medium' className={styles['search__page-paragraph']}>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <div className={styles['search__page-input']}>
          <Search
            placeholder='Введите название'
            isButtonClicked={isButtonClicked}
            value={searchQuery}
            setValue={setSearchQuery}
            ref={searchRef}
          />
          <Button onClick={handleButtonClick}>Искать</Button>
        </div>
      </form>
      <FilmCardGrid>
        {error && <Paragraph type='medium'>{error}</Paragraph>}
        {isLoading && <Paragraph type='medium'>Идет загрузка ...</Paragraph>}
        {showNoResults && <Paragraph type='medium'>Ничего не найдено ...</Paragraph>}
        {!isLoading && !showNoResults && searchResults.length === 0 ? (
          <FilmsList films={films} />
        ) : (
          <FilmsList films={searchResults} />
        )}
      </FilmCardGrid>
    </div>
  );
};

export default MainPage;
