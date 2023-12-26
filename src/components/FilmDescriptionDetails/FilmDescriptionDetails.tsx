import { FC } from 'react';
import { LabelText } from '../LabelText';
import { Paragraph } from '../Paragraph';
import { FilmDescriptionDetailsProps } from './FilmDescriptionDetails.props';
import styles from './FilmDescriptionDetails.module.css';

export const FilmDescriptionDetails: FC<FilmDescriptionDetailsProps> = ({ label, text }) => {
  return (
    <div className={styles['film__info-details']}>
      <LabelText className={styles['film__info-details-label']}>{label}</LabelText>
      <Paragraph type='large' className={styles['film__info-details-paragraph']}>
        {text}
      </Paragraph>
    </div>
  );
};
