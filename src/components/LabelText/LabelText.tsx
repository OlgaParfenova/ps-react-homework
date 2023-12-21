import { useMemo, FC } from 'react';
import classNames from 'classnames';
import { LabelTextProps } from './LabelText.props';
import styles from './LabelText.module.css';

export const LabelText: FC<LabelTextProps> = ({ className, ...props }) => {
  const LabelTextClassName = useMemo(() => {
    return classNames(styles['label--text'], className);
  }, [className]);

  return <p className={LabelTextClassName} {...props} />;
};
