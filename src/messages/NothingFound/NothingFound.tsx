import { Paragraph, Title } from '../../components';
import styles from './NothingFound.module.css';

export const NothingFound = () => {
  return (
    <div className={styles['nothing-found__message']}>
      <Title className={styles['nothing-found__message-title']}>Упс... Ничего не найдено</Title>
      <Paragraph type='large'>
        Попробуйте изменить запрос или ввести более точное название фильма
      </Paragraph>
    </div>
  );
};
