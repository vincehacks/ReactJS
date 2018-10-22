// Created by Vince Chang

/* Function: render
 * Description: This function will render the actual app wrapped with the
 * BrowserRouter component that will act as the router for the whole app. It is
 * good to wrap the app because I can interchange the router type as I see fit.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));