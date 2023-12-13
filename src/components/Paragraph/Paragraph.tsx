import { useMemo, FC } from 'react';
import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph: FC<ParagraphProps> = ({ className, type, ...props }) => {
  const ParagraphClassName = useMemo(() => {
    return classNames(styles['paragraph'], styles[`paragraph--${type}`], className);
  }, [type, className]);

  return <p className={ParagraphClassName} {...props} />;
};
