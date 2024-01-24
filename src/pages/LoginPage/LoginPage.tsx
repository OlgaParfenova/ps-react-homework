import { useState, useRef, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotBlue, SpotNavy } from '../../layouts';
import { Title, TextField, Button } from '../../components';
import { useAppDispatch } from '../../store';
import { addUserThunk } from '../../store/slices/user/thunks';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [value, setValue] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);
    searchRef.current?.focus();
    if (value !== '') {
      dispatch(addUserThunk(value));
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

export default LoginPage;
