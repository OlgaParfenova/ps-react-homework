import { createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { MainPage, LoginPage, NotFoundPage, MoviePage, FavoritesPage, ErrorPage } from '../pages';
import { Layout } from '../templates';
import { routes } from './routes';
import { API_KEY } from '../helpers';

export const router = createBrowserRouter([
  {
    path: routes.mainPageURL,
    element: <Layout />,
    children: [
      {
        path: routes.mainPageURL,
        element: <MainPage />,
      },
      {
        path: routes.loginPageURL,
        element: <LoginPage />,
      },
      {
        path: routes.favoritesPageURL,
        element: <FavoritesPage />,
      },
      {
        path: routes.moviePageURL(':id'),
        element: <MoviePage />,
        errorElement: <ErrorPage />,
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
        element: <NotFoundPage />,
      },
    ],
  },
]);
