import { FormHTMLAttributes } from 'react';

type Props = {
  placeholder?: string;
};

export type SearchFormProps = FormHTMLAttributes<HTMLFormElement> & Props;
