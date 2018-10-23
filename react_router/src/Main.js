// Created by Vince Chang

import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

/* Function: Main
 * Description: This function will iterate through different routes and render
 * the corresponding components.
 */
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)
export default Main;
