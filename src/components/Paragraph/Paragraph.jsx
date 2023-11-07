import './Paragraph.css';

export const Paragraph = ({ text, type = 'medium' | 'large' }) => {
  return <p className={`paragraph paragraph--${type}`}>{text}</p>;
};
