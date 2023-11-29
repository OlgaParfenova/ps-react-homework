import './Paragraph.css';

export const Paragraph = ({ text, cl, type = 'medium' | 'large' }) => {
  return <p className={`paragraph paragraph--${type} ${cl ? cl : ''}`}>{text}</p>;
};
