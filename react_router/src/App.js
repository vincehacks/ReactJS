// Created by Vince Chang

/* Function: render
 * Description: This function will render both the header and main components.
 */

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
      </div>
    );
  }
}

export default App;