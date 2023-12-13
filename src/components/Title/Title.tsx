import { useMemo, FC } from 'react';
import { TitleProps } from './Title.props';
import classNames from 'classnames';
import styles from './Title.module.css';

export const Title: FC<TitleProps> = ({ className, ...props }) => {
  const titleClassNames = useMemo(() => {
    return classNames(styles['title'], className);
  }, [className]);

  return <div {...props} className={titleClassNames} />;
};
