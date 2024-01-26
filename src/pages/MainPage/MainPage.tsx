import { useState, useRef, MouseEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import ReactPaginate from 'react-paginate';
import { Title, Search, Button, Paragraph, FilmCardGrid, FilmsList } from '../../components';
import { SpotBlue, SpotGreen, SpotNavy, SpotPurple } from '../../layouts';
import { Loading, NothingFound } from '../../messages';
import { Result } from '../../API/getFilms';
import { getFilms } from '../../API/getFilms';
import { PageSelected } from '../../types';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [films, setFilms] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const page = searchParams.has('page') ? +(searchParams.get('page') as string) : 1;

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    if (!searchRef.current) {
      return;
    }
    searchRef.current.focus();
  };

  const handlePaginationChange = ({ selected }: PageSelected) => {
    const paramsObject = {
      ...Object.fromEntries(searchParams),
      page: String(selected + 1),
    };
    setSearchParams(paramsObject);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getFilms({ page });
        setFilms(response.data.results);
        setTotalPages(response.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof AxiosError) setError(error.message);
        return error;
      }
    };
    getMovies();
  }, [page]);

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
          <Button onClick={handleSearchButtonClick}>Искать</Button>
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
      <ReactPaginate
        previousLabel={'Предыдущая'}
        nextLabel={'Следующая'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        initialPage={page - 1}
        onPageChange={handlePaginationChange}
        containerClassName={styles['pagination-container']}
        breakClassName={styles['pagination-item']}
        previousClassName={styles['pagination-item']}
        nextClassName={styles['pagination-item']}
        activeClassName={styles['pagination-item-active']}
        pageLinkClassName={styles['pagination-item']}
      />
    </div>
  );
};

export default MainPage;
