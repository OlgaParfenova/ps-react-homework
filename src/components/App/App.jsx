import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../../layout';

import { SearchPage, NotFoundPage } from '../../pages';

import './App.css';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='app-wrapper'>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};
