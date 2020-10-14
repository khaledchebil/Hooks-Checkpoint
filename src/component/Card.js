import React from 'react';
import '../App.css';

function Card({name, Genre, Review, picUrl}) {
  return (
    <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
      <img src={picUrl} alt='ths is the ' height='300px'/>
   <div>
      <h2>{name}</h2>
      <p>{Genre}</p>
      <p>{Review}</p>
      </div>

    
    </div>
  );
}

export default Card;
