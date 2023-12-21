import { useState, useRef, useContext, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SpotBlue, SpotNavy } from '../../layouts';
import { Title, TextField, Button } from '../../components';
import { UserContext } from '../../context/UserContext';

import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [value, setValue] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current?.focus();
    if (value !== '') {
      const user = {
        name: value,
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
          <TextField
            placeholder='Ваше имя'
            isButtonClicked={isButtonClicked}
            value={value}
            setValue={setValue}
            ref={searchRef}
          />
          <Button onClick={handleButtonClick}>Войти в профиль</Button>
        </div>
      </form>
    </div>
  );
};
