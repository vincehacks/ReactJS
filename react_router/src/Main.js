// Created by Vince Chang

import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

/* Function: Main
 * Description: This function will iterate through different routes (using
 * the Switch component) and render the corresponding components.
 *
 * The Route component is where I can pass in the component to render. If the
 * path matches, then the corresponding component is rendered.
 * Routes can render 3 things: component, render, children
 *
 * The route for the homepage includes an exact prop. This is used to state
 * that the route should only match when the pathname matches the route’s
 * path exactly.
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
