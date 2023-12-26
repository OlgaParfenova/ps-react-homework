import { useMemo, FC } from 'react';
import classNames from 'classnames';
import { SubtitleProps } from './Subtitle.props';
import styles from './Subtitle.module.css';

export const Subtitle: FC<SubtitleProps> = ({ className, type, ...props }) => {
  const SubtitleClassName = useMemo(() => {
    return classNames(styles['subtitle'], styles[`subtitle--${type}`], className);
  }, [type, className]);

  return <p className={SubtitleClassName} {...props} />;
};
