import { FC } from 'react';
import classNames from 'classnames';
import { PaperProps } from './PaperProps';
import styles from './Paper.module.css';

export const Paper: FC<PaperProps> = ({ children, className }) => {
  return <div className={classNames(styles['paper'], className)}>{children}</div>;
};
