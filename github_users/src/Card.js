// Created by Vince Chang

import React from 'react';

/* Function: Card
 * Description: This function will create individual github cards accessing the
 * information from the props that were passed in
 */
const Card = (props) => {
    return (
      <div style={{margin:'4em'}}>
        <img width="100" height="100" src={props.avatar_url} alt={""}/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize:'1.25em', fontWeight: 'bold'}}>{props.name}</div>
          <br/>
          <div>Github Login ID: {props.login}</div>
          <br/>
          <div>Github API URL: {props.url}</div>
        </div>
      </div>
    );
}

export default Card;