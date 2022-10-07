import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row mr-1">
            <div className="min col-sm-4 col-md-4 col-lg-4">
              <strong>
              <p>Min</p>
              <p>{min}°</p>
              </strong>
            </div>
            <div className="min col-sm-4 col-md-4 col-lg-4">
              <strong>
              <p>Max</p>
              <p>{max}°</p>
              </strong>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
};
