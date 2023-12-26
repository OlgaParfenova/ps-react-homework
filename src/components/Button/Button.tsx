import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classNames from 'classnames';

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={classNames(styles['button'], className)} />;
};
