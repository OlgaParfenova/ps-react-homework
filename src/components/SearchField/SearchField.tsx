import { forwardRef } from 'react';
import { TextField } from '../TextField';
import { TextFieldProps } from '../TextField/TextField.props';
import searchIcon from '../../assets/icons/Search.svg';

export const SearchField = forwardRef<HTMLInputElement, Omit<TextFieldProps, 'icon'>>(
  ({ ...props }, ref) => {
    return <TextField {...props} icon={<img src={searchIcon} alt='Поиск' />} ref={ref} />;
  },
);
