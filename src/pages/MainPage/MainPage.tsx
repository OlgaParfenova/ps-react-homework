import { useState, useRef, MouseEvent, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Title, Search, Button, Paragraph, FilmCardGrid, FilmsList } from '../../components';
import { SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import { Loading, NothingFound } from '../../messages';
import { Result } from '../../API/getFilms';
import { getFilms } from '../../API/getFilms';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [films, setFilms] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getFilms({ page: 1 });
        setFilms(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof AxiosError) setError(error.message);
        return error;
      }
    };
    getMovies();
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
      {error && <Paragraph type='medium'>{error}</Paragraph>}
      {isLoading && <Loading />}
      {showNoResults && <NothingFound />}
      <FilmCardGrid>
        {!isLoading && !showNoResults && !searchResults.length ? (
          <FilmsList films={films} />
        ) : (
          <FilmsList films={searchResults} />
        )}
      </FilmCardGrid>
    </div>
  );
};

export default MainPage;
