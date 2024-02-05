import { ReactNode, HTMLProps } from 'react';

type InputProps = HTMLProps<HTMLInputElement>;

type Props = {
  isError?: boolean;
  icon?: ReactNode;
};

export type TextFieldProps = InputProps & Props;
