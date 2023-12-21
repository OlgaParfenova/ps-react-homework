import { createBrowserRouter } from 'react-router-dom';
import { MainPage, LoginPage, NotFoundPage, MoviePage, FavoritesPage } from '../pages';
import { Layout } from '../templates';
import { routes } from './routes';

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
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
