// Created by Vince Chang

import React from 'react';
import PlayerAPI from './api';
import { Link } from 'react-router-dom';

/* Function: Player
 * Description: This function will render a Player component that holds info
 * about the player such as name, position, and number.
 *
 * Since the player's number was passed in a parameter in the url, I can access
 * the number by using match.params.number and converting that string into a
 * number. This is the reason why this function has a parameter called props.
 *
 * PlayerAPI.get returns a boolean whether or not the player exists in API.
 */
const Player = (props) => {

  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )  
}

export default Player;