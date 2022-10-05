import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.mainBox}>
      <input id='inp' type='text' placeholder='Ciudad...'/>
      <button onClick={() => props.onSearch('Buscando...')} className={s.btn}>Agregar</button>
    </div>
  )
};