import { InputHTMLAttributes } from 'react';

type Search = {
  placeholder: string;
  icon?: string;
  isButtonClicked: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export type SearchProps = InputHTMLAttributes<HTMLInputElement> & Search;
