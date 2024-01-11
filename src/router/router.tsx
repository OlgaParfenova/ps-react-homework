import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Layout } from '../templates';
import { routes } from './routes';
import { API_KEY } from '../helpers';
import { Paragraph } from '../components';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

export const router = createBrowserRouter([
  {
    path: routes.mainPageURL,
    element: <Layout />,
    children: [
      {
        path: routes.mainPageURL,
        element: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: routes.loginPageURL,
        element: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: routes.favoritesPageURL,
        element: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: routes.moviePageURL(':id'),
        element: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <MoviePage />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <ErrorPage />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const movieResponse = await axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${params.id}`,
            headers: {
              accept: 'application/json',
              Authorization: API_KEY,
            },
          });

          const reviewsResponse = await axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${params.id}/reviews`,
            headers: {
              accept: 'application/json',
              Authorization: API_KEY,
            },
          });

          return {
            movie: movieResponse.data,
            reviews: reviewsResponse.data,
          };
        },
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
