import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
const reactDomRoot = ReactDOM.createRoot(root);
reactDomRoot.render(<RouterProvider router={router} />);
