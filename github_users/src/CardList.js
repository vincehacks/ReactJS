/* Created by Vince Chang */

import React from 'react';
import Card from './Card';


/* =========================================================================
* Function Name: CardList
* Task: This React based function will be passed an array of cards via props.
* For each card in the array of cards, this function will create a new Card
* component. The card uses the spread operator to pass in all of the props
* that is associated to a card
*
* { ...card } is equal to :
* name = card.name
* avatar_url = card.avatar_url
* login = card.login ...etc
*
* The spread operator is the shorthand way of typing out what I stated above
* and passing all of those items in individually
  ========================================================================= */
const CardList = props => {

  return (
    <div className="Card">
      {props.cards.map(card => (
        <Card key={card.login} {...card} />
      ))}
    </div>
  );
};

export default CardList;
