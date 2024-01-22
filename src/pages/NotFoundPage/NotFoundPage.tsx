import { useNavigate } from 'react-router-dom';
import { Button, Paragraph, Title } from '../../components';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavHomePage = () => {
    navigate('/');
  };
  
  return (
    <div className={styles['not-found__page']}>
      <Title>Ошибка 404</Title>
      <Paragraph type='large' className={styles['not-found__page-paragpaph']}>
        Страница не найдена
      </Paragraph>
      <Button onClick={handleNavHomePage}>Вернуться на главную страницу</Button>
    </div>
  );
};

export default NotFoundPage;