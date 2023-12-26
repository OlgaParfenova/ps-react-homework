import { forwardRef, useMemo, ChangeEvent } from 'react';
import classNames from 'classnames';
import { TextFieldProps } from './TextField.props';
import styles from './TextField.module.css';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, icon, isButtonClicked, value, setValue }, ref) => {
    const inputClasses = useMemo(() => {
      return classNames(styles['input'], {
        [styles['input__icon']]: icon,
        [styles['input__error']]: isButtonClicked && value === '',
      });
    }, [icon, isButtonClicked, value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className={styles['wrap']}>
        <input
          type='text'
          placeholder={placeholder}
          className={inputClasses}
          ref={ref}
          onChange={handleInputChange}
        />
        {icon || null}
      </div>
    );
  },
);

TextField.displayName = 'Search';
