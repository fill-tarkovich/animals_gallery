import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/200x150/?${props.name}`}
        alt={props.name}
      />
      <button className="remove" onClick={props.remove}>
        x
      </button>
      <h2>{props.name}</h2>
      <h3>{props.input}</h3>
      <div className="card_bottom">
        <p className="likes">❤ {props.like}</p>
        <button onClick={props.add}>Like</button>
      </div>
    </div>
  );
};

export default AnimalCard;
