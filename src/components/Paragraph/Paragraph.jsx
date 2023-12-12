import { useMemo } from 'react';

import classNames from 'classnames';

import styles from './Paragraph.module.css';

export const Paragraph = ({ text, cl, type = 'medium' | 'large' }) => {
  const className = useMemo(() => {
    return classNames(styles['paragraph'], styles[`paragraph--${type}`], cl);
  }, [type, cl]);

  return <p className={className}>{text}</p>;
};
