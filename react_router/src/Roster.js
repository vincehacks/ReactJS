// Created by Vince Chang

import React from 'react';
import {Switch,Route} from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

/* Function: Roster
 * Description: This function will render either a FullRoster component or a
 * player component depending on the route.
 */
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

export default Roster;