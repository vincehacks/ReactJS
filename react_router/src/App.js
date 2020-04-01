// Created by Vince Chang

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  /* =========================================================================
  * Function Name: render
  * Task: This function will render the Header and Main components
    ========================================================================= */
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
