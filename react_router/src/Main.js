// Created by Vince Chang

/* Function: render
 * Description: This function will render 
 */
   
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
// import Roster from './Roster';
// import Schedule from './Schedule';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)
export default Main;
