// Created by Vince Chang

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

/* =========================================================================
* Function Name: Roster
* Task: This React function based component will render either a FullRoster
* component or a player component depending on the route.
*
* The :number part of the path /roster/:number means that the part of the
* pathname that comes after /roster/ will be captured and stored as
* match.params.number (value is stored as a string!)
========================================================================= */
const Roster = () => (
  <Switch>
    <Route exact path="/roster" component={FullRoster} />
    <Route path="/roster/:number" component={Player} />
  </Switch>
);

export default Roster;
