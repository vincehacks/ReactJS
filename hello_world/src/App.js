// Created by Vince Chang

// Importing the react library from the npm module
import React from "react";

// Going to start using HelloWorldList instead!
//import HelloWorld from './HelloWorld';
import HelloWorldList from "./HelloWorldList";

// Instead of calling <HelloWorld/> multiple times, we can just call
// <HelloWorldList/> once and all will be good!
const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
    </div>
  );
};

// Export this component so it could be used in other files!
export default App;
