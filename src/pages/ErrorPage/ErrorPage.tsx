import { useNavigate } from 'react-router-dom';
import { Button, Title } from '../../components';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavHomePage = () => {
    navigate('/');
  };
  return (
    <div className={styles['error__page']}>
      <Title className={styles['error__page-title']}>Произошла ошибка</Title>
      <Button onClick={handleNavHomePage}>Вернуться на главную страницу</Button>
    </div>
  );
};
