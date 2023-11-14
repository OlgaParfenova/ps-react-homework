import { Title } from '../Title';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { SpotBlue, SpotNavy } from '../../layout';

import './App.css';

export const App = () => {
  const handleButtonClick1 = () => {
    console.log('clicked 1!');
  };

  const handleButtonClick2 = () => {
    console.log('clicked 2!');
  };

  return (
    <div className='app-wrapper'>
      <SpotBlue />
      <SpotNavy />
      <Title text='Поиск' />
      <Button text='Искать' handleButtonClick={handleButtonClick1} />
      <Button text='Войти в профиль' handleButtonClick={handleButtonClick2} />
      <Paragraph
        text='Наше дело не так однозначно, как может показаться: убеждённость некоторых оппонентов напрямую зависит от глубокомысленных рассуждений. Не следует, однако, забывать, что синтетическое тестирование предоставляет широкие возможности для новых принципов формирования материально-технической и кадровой базы.'
        type='medium'
      />
      <Paragraph
        text='Однозначно, ключевые особенности структуры проекта призваны к ответу. Лишь стремящиеся вытеснить традиционное производство, нанотехнологии объективно рассмотрены соответствующими инстанциями.'
        type='large'
      />
    </div>
  );
};
