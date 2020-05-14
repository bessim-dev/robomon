import React from "react";
import './card.css'
const Card = ({name,email,id}) => {
  return (
    <div className='card'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
