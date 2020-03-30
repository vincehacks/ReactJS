// Created by Vince Chang

import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  /* =========================================================================
  * Function Name: render
  * Task: This function will render a Game component
  *
  * The purpose of the game is to allow users to click from the
  * numbers component that add up to the target number, until all numbers
  * have been used. If the user experiences a case where the remaining
  * numbers don't add up to the target number, then they are allowed the
  * ability to refresh their target number in hopes of having a combination
  * of two numbers that add up to the target number
    ========================================================================= */
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
