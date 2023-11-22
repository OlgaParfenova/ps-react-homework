import './Paragraph.css';

export const Paragraph = ({ text, type = 'medium' | 'large', cl }) => {
  return <p className={`paragraph paragraph--${type} ${cl ? cl : ''}`}>{text}</p>;
};
