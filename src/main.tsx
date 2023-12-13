import ReactDOM from 'react-dom/client';
import { App } from './components';
import './index.css';

const root = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(root);
reactDomRoot.render(<App />);
