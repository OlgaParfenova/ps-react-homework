import { forwardRef, useMemo, ChangeEvent } from 'react';
import classNames from 'classnames';
import { TextFieldProps } from './TextField.props';
import styles from './TextField.module.css';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ icon, isError, style, className, id, ...props }, ref) => {
    const divClasses = useMemo(() => {
      return classNames(styles['wrap'], className);
    }, [className]);

    const inputClasses = useMemo(() => {
      return classNames(styles['input'], {
        [styles['input__icon']]: icon,
        [styles['input__error']]: isError,
      });
    }, [icon, isError]);

    return (
      <div style={style} className={divClasses} id={id}>
        <input {...props} type='text' className={inputClasses} ref={ref} />
        {icon || null}
      </div>
    );
  },
);

TextField.displayName = 'Search';
