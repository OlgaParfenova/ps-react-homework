import styles from './Button.module.css';

export const Button = ({ text, handleButtonClick }) => {
  return (
    <button className={styles['button']} onClick={handleButtonClick}>
      {text}
    </button>
  );
};
