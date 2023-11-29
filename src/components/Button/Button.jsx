import './Button.css';

export const Button = ({ text, handleButtonClick }) => {
  return (
    <button className='button' onClick={handleButtonClick}>
      {text}
    </button>
  );
};
