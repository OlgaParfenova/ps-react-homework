import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
const reactDomRoot = ReactDOM.createRoot(root);
reactDomRoot.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
