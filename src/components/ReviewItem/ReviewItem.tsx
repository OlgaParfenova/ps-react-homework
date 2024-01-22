import { FC } from 'react';
import { Paper } from '../../layouts';
import { LabelText } from '../LabelText';
import { Paragraph } from '../Paragraph';
import { Subtitle } from '../Subtitle';
import { ReviewItemProps } from './ReviewItem.props';
import styles from './ReviewItem.module.css';

export const ReviewItem: FC<ReviewItemProps> = ({ title, date, text }) => {
  return (
    <Paper className={styles['review']}>
      <div className={styles['reviews-title']}>
        <Subtitle type='medium'>{title}</Subtitle>
        <LabelText>{date}</LabelText>
      </div>
      <Paragraph type='large'>{text}</Paragraph>
    </Paper>
  );
};
