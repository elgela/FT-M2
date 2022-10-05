import React from 'react';
// import { Cairns } from '../data';
import Card from './Card';

export default function Cards({cities}) { //entre llaves es destructuring
  // acá va tu código
  // tip, podés usar un map
  return (
    cities?.map(ciudad => //el '?' sería que averiguaría si es que tiene cities, si tiene mapea y si no no
      <Card
      key={ciudad.id} 
      max={ciudad.main.temp_max}
      min={ciudad.main.temp_min}
      name={ciudad.name}
      img={ciudad.weather[0].icon}
      onClose={() => alert(ciudad.name)} //o lo que se quiera que se muestre en el alert
      />
    )
  )
};