/* Created by Vince Chang */

import React from 'react';

/* =========================================================================
* Function Name: Card
* Task: This React based function will create individual Github cards accessing
* the information from that is passed in via props
*
* The props that are passed in are things such as name, avatar_url, login, url
  ========================================================================= */
const Card = props => {
  return (
    <div className="ActualCard">
      <div>
        <img src={props.avatar_url} alt={''} />
      </div>
      <div>
        <div className="BigName">{props.name}</div>
        <div>Location: {props.location}</div>
        <div>Github Login ID: {props.login}</div>
        <div>Github API URL: {props.url}</div>
      </div>
    </div>
  );
};

export default Card;
