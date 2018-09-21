import Card from './Card';
import React from 'react';


const CardList = (props) =>{
    return (
        <div>
            {props.cards.map((card) => <Card {...card}/>)}
        </div>
    );
};

export default CardList;