/* Created by Vince Chang */

// Importing the react library from the npm module
import React from 'react';
import HelloWorldList from './HelloWorldList';

/* =========================================================================
* Function Name: App
* Task: This is a React function based component that will return back another
* component called HelloWorldList.
*
* Before I was rendering the HelloWorldList, I was rendering the HelloWord
* component several times, in order to do this dynamically, this is delegated to
* HelloWorldList to take care of
  ========================================================================= */
const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
    </div>
  );
};

// Export this component so it could be used in other files!
export default App;
