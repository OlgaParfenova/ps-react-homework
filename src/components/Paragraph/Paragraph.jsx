import styles from './Paragraph.module.css';

export const Paragraph = ({ text, cl, type = 'medium' | 'large' }) => {
  return (
    <p className={`${styles['paragraph']} ${styles[`paragraph--${type}`]} ${cl ? cl : ''}`}>
      {text}
    </p>
  );
};
