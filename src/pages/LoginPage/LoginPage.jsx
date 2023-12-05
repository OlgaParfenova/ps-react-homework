import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { SpotBlue, SpotNavy } from '../../layout';
import { Title, Search, Button } from '../../components';

import styles from './LoginPage.module.css';

export const LoginPage = ({ setLoginValue }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current.focus();

    if (searchValue !== '') {
      const user = {
        name: searchValue,
        isLogined: true,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setLoginValue(true);
      navigate('/');
    }
  };

  return (
    <div>
      <SpotBlue />
      <SpotNavy />
      <form>
        <Title text='Вход' cl={styles['login__page-title']} />
        <div className={styles['login__page-input']}>
          <Search
            placeholder='Ваше имя'
            isButtonClicked={isButtonClicked}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            ref={searchRef}
          />
          <Button text='Войти в профиль' handleButtonClick={handleButtonClick} />
        </div>
      </form>
    </div>
  );
};
