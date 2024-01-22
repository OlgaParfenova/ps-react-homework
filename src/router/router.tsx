import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Layout } from '../templates';
import { routes } from './routes';
import { RequireAuth } from '../helpers';
import { Paragraph } from '../components';
import { API_BASE } from '../API/constants';

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
          <RequireAuth>
            <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
              <MainPage />
            </Suspense>
          </RequireAuth>
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
          <RequireAuth>
            <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
              <FavoritesPage />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: routes.moviePageURL(':id'),
        element: (
          <RequireAuth>
            <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
              <MoviePage />
            </Suspense>
          </RequireAuth>
        ),
        errorElement: (
          <RequireAuth>
            <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
              <ErrorPage />
            </Suspense>
          </RequireAuth>
        ),
        loader: async ({ params }) => {
          const movieResponse = await axios({
            method: 'GET',
            url: `${API_BASE}/movie/${params.id}`,
            headers: {
              accept: 'application/json',
              Authorization: import.meta.env.VITE_APP_KEY,
            },
          });

          const reviewsResponse = await axios({
            method: 'GET',
            url: `${API_BASE}/movie/${params.id}/reviews`,
            headers: {
              accept: 'application/json',
              Authorization: import.meta.env.VITE_APP_KEY,
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
          <RequireAuth>
            <Suspense fallback={<Paragraph type='large'>Идет загрузка страницы ...</Paragraph>}>
              <NotFoundPage />
            </Suspense>
          </RequireAuth>
        ),
      },
    ],
  },
]);
