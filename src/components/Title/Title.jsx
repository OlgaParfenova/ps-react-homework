import styles from './Title.module.css';

export const Title = ({ text, cl }) => {
  return <div className={`${styles['title']} ${cl ? cl : ''}`}>{text}</div>;
};
