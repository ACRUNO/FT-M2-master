import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
        {
          cities.map(card => (
            <Card
            max={card.main.temp_max}
            min={card.main.temp_min}
            name={card.name}
            img={card.weather[0].icon}
            onClose={() => alert(card.name)}
          />
          ))
        }
    </div>
  )
};