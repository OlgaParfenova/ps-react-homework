import { useState, useRef, useContext, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SpotBlue, SpotNavy } from '../../layout';
import { Title, Search, Button } from '../../components';
import { UserContext } from '../../context/UserContext';

import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current?.focus();
    if (searchValue !== '') {
      const user = {
        name: searchValue,
        isLogined: true,
      };
      setUser(user);
      navigate('/');
    }
  };

  return (
    <div>
      <SpotBlue />
      <SpotNavy />
      <form>
        <Title className={styles['login__page-title']}>Вход</Title>
        <div className={styles['login__page-input']}>
          <Search
            placeholder='Ваше имя'
            isButtonClicked={isButtonClicked}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            ref={searchRef}
          />
          <Button onClick={handleButtonClick}>Войти в профиль</Button>
        </div>
      </form>
    </div>
  );
};
