import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { MainPage, LoginPage, NotFoundPage, MoviePage, FavoritesPage } from './pages';
import { Layout } from './layout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '/movie/:id',
        element: <MoviePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(root);
reactDomRoot.render(<RouterProvider router={router} />);
