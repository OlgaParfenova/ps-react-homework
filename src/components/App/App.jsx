import { Navbar } from '../../layout';

import { SearchPage } from '../../pages';

import './App.css';

export const App = () => {
  return (
    <>
      <Navbar />
      <div className='app-wrapper'>
        <SearchPage />
      </div>
    </>
  );
};
