import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div id="card">
      <img
        src={props.img}
        alt="img"
        height={100}
        width={100}
      />
      <h1>{props.name}</h1>
      <h1>{props.edu}</h1>
    </div>
  );
}

export default Card