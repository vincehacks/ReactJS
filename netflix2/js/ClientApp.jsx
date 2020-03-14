/* Created by Vince Chang
 * This is an React functional component that will allow me to use and maintain
 * state! This is the entry point to the entire application
 */

import React from 'react';
import { render } from 'react-dom';
import App from './App';

/* =========================================================================
 * Function Name: renderApp
 * Task: This function will render the <App/> component
   ========================================================================= */
const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp(); // Call so it gets rendered the first time

// This is specific to HMR and only to webpack and development not production
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
