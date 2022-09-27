import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.card}>
        <button className={s.btn} onClick={onClose}>x</button>
      <div className={s.title}>
        <h3>{name}</h3>
      </div>
      <div className={s.h6}>
        <div>
          <h6>Min</h6>
          <h6>{min}</h6>
        </div>
      <div>
        <h6>Max</h6>
        <h6>{max}</h6>
      </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=''/>
      </div>
    </div>
  )
};
