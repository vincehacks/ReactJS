import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render takes 2 parameters (which component to render, and where to render)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();