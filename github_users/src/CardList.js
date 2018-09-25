// Created by Vince Chang

import React from 'react';
import Card from './Card';

/* Function: CardList
 * Description: This function will take an object of cards to pass to Card
 * to then build individually
 */
const CardList = (props) => {
  return (
    <div>
      {props.cards.map((card) => <Card {...card}/>)}
    </div>
  );
};

export default CardList;