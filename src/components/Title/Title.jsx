import './Title.css';

export const Title = ({ text, cl }) => {
  return <div className={`title ${cl ? cl : ''}`}>{text}</div>;
};
