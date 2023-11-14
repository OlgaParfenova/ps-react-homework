import './Search.css';

export const Search = ({ placeholder, icon }) => {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder={placeholder}
        className={`search__input ${icon ? 'search__input--icon' : ''}`}
      />
      {icon && <img src={icon} alt='Поиск' className='search__icon' />}
    </div>
  );
};
