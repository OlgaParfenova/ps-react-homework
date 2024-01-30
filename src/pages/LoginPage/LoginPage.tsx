import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotBlue, SpotNavy } from '../../layouts';
import { Title, TextField, Button } from '../../components';
import { useAppDispatch } from '../../store';
import { addUserThunk } from '../../store/slices/user/thunks';
import styles from './LoginPage.module.css';

const checkValid = (arg: string) => {
  return arg !== '';
};

export const LoginPage = () => {
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkValid(value)) {
      setIsError(true);
      searchRef.current?.focus();
      return;
    }

    dispatch(addUserThunk(value));
    navigate('/');
  };

  return (
    <div>
      <SpotBlue />
      <SpotNavy />
      <form onSubmit={handleSubmit}>
        <Title className={styles['login__page-title']}>Вход</Title>
        <div className={styles['login__page-input']}>
          <TextField
            placeholder='Ваше имя'
            value={value}
            onChange={handleChangeInput}
            ref={searchRef}
            isError={isError}
          />
          <Button type='submit'>Войти в профиль</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
