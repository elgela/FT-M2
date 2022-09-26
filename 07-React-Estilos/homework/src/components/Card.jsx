import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button onClick={onClose}>x</button>
      <h3>{name}</h3>
      <h5>Min</h5>
      <div>{min}</div>
      <h5>Max</h5>
      <div>{max}</div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=''/>
    </div>
  )
};
