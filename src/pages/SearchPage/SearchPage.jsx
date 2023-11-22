import { Title, Search, Button, Paragraph, FilmCard } from '../../components';
import { SpotBlue, SpotNavy } from '../../layout';

import BW from '../../assets/images/1.png';
import SC from '../../assets/images/2.png';
import LOKI from '../../assets/images/3.png';
import HIMYM from '../../assets/images/4.png';
import MH from '../../assets/images/5.png';
import FR from '../../assets/images/6.png';
import TBBT from '../../assets/images/7.png';
import TAHM from '../../assets/images/8.png';
import SearchIcon from '../../assets/icons/Search.svg';

import './SearchPage.css';

export const SearchPage = () => {
  const handleButtonClick1 = () => {
    console.log('clicked 1!');
  };

  return (
    <div className='search__page'>
      <SpotBlue />
      <SpotNavy />
      <Title text='Поиск' cl='search__page-title' />
      <Paragraph
        text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        type='medium'
        cl='search__page-paragraph'
      />
      <div className='search__page-input'>
        <Search placeholder='Введите название' icon={SearchIcon} />
        <Button text='Искать' handleButtonClick={handleButtonClick1} />
      </div>
      <div className='search__page-films'>
        <FilmCard title='Black widow' rating='325' cover={BW} />
        <FilmCard title='Shang Chi' rating='124' cover={SC} />
        <FilmCard title='Loki' rating='235' cover={LOKI} />
        <FilmCard title='How I Met Your Mother' rating='123' cover={HIMYM} />
        <FilmCard title='Money Heist' rating='8125' cover={MH} />
        <FilmCard title='Friends' rating='123' cover={FR} />
        <FilmCard title='The Big Bang Theory' rating='12' cover={TBBT} />
        <FilmCard title='Two And a Half Men' rating='456' cover={TAHM} />
      </div>
    </div>
  );
};
