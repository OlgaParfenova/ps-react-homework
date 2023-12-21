import { InputHTMLAttributes, ReactNode } from 'react';

type TextField = {
  placeholder: string;
  isButtonClicked: boolean;
  value: string;
  setValue: (value: string) => void;
  icon?: ReactNode;
};

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & TextField;
