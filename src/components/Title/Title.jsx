import { useMemo } from 'react';

import classNames from 'classnames';

import styles from './Title.module.css';

export const Title = ({ text, cl }) => {
  const titleClasses = useMemo(() => {
    return classNames(styles['title'], cl);
  }, [cl]);

  return <div className={titleClasses}>{text}</div>;
};
