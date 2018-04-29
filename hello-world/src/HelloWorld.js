// Importing the react library from the npm module
import React from 'react';
import './HelloWorld.css';

const HelloWorld = (props) => {
  return (<div className="HelloWorld">Hello {props.name}!</div>);
};

// Export this component so it could be used in other files!
export default HelloWorld;