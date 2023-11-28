import classNames from 'classnames';

import styles from './Title.module.css';

export const Title = ({ text, cl }) => {
  const titleClasses = classNames(styles['title'], cl);

  return <div className={titleClasses}>{text}</div>;
};
