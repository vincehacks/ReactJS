// Created by: Vince Chang

import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import Button from './components/Button';

/* =========================================================================
 * Function Name: App
 * Task: This is a React function based component that uses React.Hooks to
 * manage and update the state of the application. This function will render
 * a <ListLoading> component that will result to a what <WithListLoading>
 * returns which will either be a message OR a <List>. If the result is <List>,
 * then this will produce a different message OR a <CountryCard>.
 *
 * Lastly, this will also create a button component that will allow you to
 * render the next 10 countries.
  ========================================================================= */
function App() {

  // Creating a new component called ListLoading that will be assigned from the
  // all from withListLoading. This component will either be a message that the
  // api is querying data or the actual result itself
  const ListLoading = withListLoading(List);

  // HOOK: useState() set the state appState is the reference along with a
  // function called setAppState that will handle this state
  const [appState, setAppState] = useState({
    loading: false,
    covidData: null,
    index: 0
  });

  /* HOOK: useEffect() is like 3 Lifecycle methods combine into one which are:
   * componentDidMount,
   * The useEffect will be used to query the Covid-19 API and get the response
   * back. Because fetch() is being used, a promise to a
   */
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.covid19api.com/summary`;
    fetch(apiUrl)
      .then((res) => res.json()) // Returns an HTTP that is converted to JSON
      .then((covidData) => { // Assign the state to this:
        setAppState({ loading: false, covidData: covidData, index: 0 });
      });
  }, [setAppState]);


  // UI THAT IS RETURNED
  return (
    <div className='App'>
      <div className='container'>
        <h1>COVID-19 Data</h1>
      </div>
      <div className='country-container'>
        <ListLoading isLoading={appState.loading} covidData={appState.covidData} index={appState.index} />
      </div>
      <div className='button'>
        <Button />
      </div>
      <footer>
        <div className='footer'>
          Built by Vince Chang
        </div>
      </footer>
    </div>
  );
}
export default App;