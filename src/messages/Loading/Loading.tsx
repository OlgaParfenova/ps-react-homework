import { Title } from '../../components';
import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles['loading__message']}>
      <Title>Идет загрузка ...</Title>
    </div>
  );
};
