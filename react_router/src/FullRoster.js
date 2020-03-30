// Created by Vince Chang

import React from 'react';
import PlayerAPI from './api';
import { Link } from 'react-router-dom';

/* =========================================================================
* Function Name: FullRoster
* Task: This React function based component will render all the players in the
* roster as click-able links that renders the individual Player components.
*
* PlayerAPI is a object and uses the all function that was defined in that
* file which will return the players array with each element being an object
* of its respected player.
  ========================================================================= */
const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster;