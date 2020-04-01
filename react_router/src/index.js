// Created by Vince Chang

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/* =========================================================================
* Function Name: Home
* Task: This is the entry point to the app. React's BrowserRouter is what wraps
* the entire application for links to be possible.
  ========================================================================= */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
