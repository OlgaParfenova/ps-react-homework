import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import { Paragraph, FilmCardGrid, FilmsList } from '../../components';
import { SpotBlue, SpotGreen, SpotNavy, SpotPurple, SearchFormLayout } from '../../layouts';
import { Loading, NothingFound } from '../../messages';
import { Result } from '../../API/getFilms';
import { searchFilms } from '../../API/searchFilms';
import { getFilms } from '../../API/getFilms';
import { PageSelected } from '../../types';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [films, setFilms] = useState<Result[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.has('page') ? +(searchParams.get('page') as string) : 1;

  useEffect(() => {
    const query = searchParams.get('query');
    const getResult = async (params: URLSearchParams) => {
      setIsLoading(true);
      try {
        if (query !== null) {
          const response = await searchFilms(params);
          setFilms(response.data.results as Result[]);
          setTotalPages(response.data.total_pages);
          return;
        }
        const response = await getFilms(params);
        setFilms(response.data.results as Result[]);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        if (err instanceof AxiosError) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getResult(searchParams);
  }, [searchParams]);

  const handlePaginationChange = ({ selected }: PageSelected) => {
    const paramsObject = {
      ...Object.fromEntries(searchParams),
      page: String(selected + 1),
    };
    setSearchParams(paramsObject);
  };

  const isViewNothingFound = !isLoading && films.length === 0;
  const isViewFilmCards = !isLoading && films.length > 0;

  return (
    <div className={styles['search__page']}>
      <SpotBlue />
      <SpotNavy />
      <SpotGreen />
      <SpotPurple />
      <SearchFormLayout />
      {error && <Paragraph type='medium'>{error}</Paragraph>}
      {isLoading && <Loading />}
      {isViewNothingFound && <NothingFound />}

      {isViewFilmCards && <FilmCardGrid>{<FilmsList films={films} />}</FilmCardGrid>}

      <ReactPaginate
        previousLabel={'Предыдущая'}
        nextLabel={'Следующая'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        initialPage={page - 1}
        onPageChange={handlePaginationChange}
        containerClassName={classNames(styles['pagination-container'])}
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
