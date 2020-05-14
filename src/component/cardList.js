import React from "react";
import Card from "./card";
import './cardList.css'
const CardList = ({ robots }) => {
  const cardArray = robots.map((user, i) => {
    return (
      <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} key={robots[i].id} />
    );
  });
  return <div className='allcards'>{cardArray}</div>;
};
export default CardList;
