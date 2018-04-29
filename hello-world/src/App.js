// Importing the react library from the npm module
import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Vince"/>
      <HelloWorld name="Chang"/>
    </div>
  );
};

// Export this component so it could be used in other files!
export default App;