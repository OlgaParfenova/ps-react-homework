import { useSearchParams } from 'react-router-dom';
import { useState, ChangeEvent, useRef, FormEvent, FC } from 'react';
import { SearchField } from '../SearchField';
import { Button } from '../Button';
import styles from './SearchForm.module.css';
import { SearchFormProps } from './SearchForm.props';
import classNames from 'classnames';

export const SearchForm: FC<SearchFormProps> = ({ placeholder, className, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>('');
  const defaultValue = searchParams.get('query');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const formClassNames = classNames(styles['searchform-form'], className);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current === null) return;
    const value = inputRef.current.value;
    if (value.length > 0) {
      setSearchParams({
        page: '1',
        query: value,
      });
      setValue('');
      return;
    }
    setSearchParams({});
  };

  return (
    <form {...props} className={formClassNames} onSubmit={handleSubmit}>
      <SearchField
        name='search'
        value={value}
        placeholder={placeholder || ''}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <Button type='submit'>Искать</Button>
    </form>
  );
};
