import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {

  const [place, setPlace] = useState(0);
  const {id, image, title, describe} = data[place];

  const [showMore, setShowMore] = useState(false);

  const Next = () => {
    setPlace(place => {
      place ++;
      if (place > data.length-1) 
      {
        place = 0
      }
      return place
    })}

    const Previous = () => {
      setPlace(place => {
        place --;
        if (place<0) {
          return data.length-1
        }
        return place;
      })
    }

    const btnText = showMore ? "Скрыть" : "Подробнее";
  return (
    <div>
      <div className='container'>
      <h1>7 самых красивых небольших городков во Франции</h1>
      </div>
      <div key={id} className='container'>
      <h2>{id} - {title}</h2>
      <img src={image} width="500px" height="300px" alt="foto"/>
      <p> {showMore ? describe : describe.substring(0,100) + "..."}
      <button className='btnShow' onClick={() => setShowMore(!showMore)}>{btnText}</button></p>
      </div>

    <div className='containerTwo'>
      <button className='btn' onClick={Previous}>Предыдущий</button>
      <button className='btn' onClick={Next}>Следующий</button>
    </div>

    </div>
  );
}

export default App;
