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
    <div style={{ margin: '4em' }}>
      <img width="100" height="100" src={props.avatar_url} alt={''} />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
          {props.name}
        </div>
        <br />
        <div>Github Login ID: {props.login}</div>
        <br />
        <div>Github API URL: {props.url}</div>
      </div>
    </div>
  );
};

export default Card;
