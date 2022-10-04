import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.mainBox}>
      <button onClick={props.onClose} className={s.btn}>X</button>
      <h4>{props.name}</h4>

      <div className={s.container}>
          <div>
            <h6>Min</h6>
            <p>{props.min}</p>
          </div>
          <div>
            <h6>Max</h6>
            <p>{props.max}</p>
          </div>
          <img src =  {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = ''/>
      </div>
    </div>
    )
};