import { FC } from 'react';
import styles from './SearchFormLayout.module.css';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { SearchForm } from '../../components/SearchForm';

export const SearchFormLayout: FC = () => {
  return (
    <>
      <Title className={styles['searchform-title']}>Поиск</Title>
      <Paragraph type='medium' className={styles['searchform-paragraph']}>
        Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
      </Paragraph>
      <SearchForm className={styles['searchform-form']} placeholder='Введите название фильма' />
    </>
  );
};
