// Created by Vince Chang

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import pf from 'petfinder-client';
import { Provider } from './SearchContext';
import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';

const petfinder = pf({});

class App extends React.Component {
  /* =========================================================================
  * Function Name: constructor
  * Task: This function will bind the state
  * Every time you call .bind will create a new function, so that's why do it
  * in the constructor, but good thing it will only happen once
  * In newer JS, you no longer need to write the constructor if you write
  * functions using the arrow function, it will automatically do the binding
  * refer to transform-class-properties
   ========================================================================= */
  constructor(props) {
    super(props);

    this.state = {
      location: 'San Francisco, CA',
      animal: '',
      breed: '',
      breeds: [],
      handleAnimalChange: this.handleAnimalChange.bind(this),
      handleBreedChange: this.handleBreedChange.bind(this),
      handleLocationChange: this.handleLocationChange.bind(this),
      getBreeds: this.getBreeds
    };
  }

  /* =========================================================================
  * Function Name: handleLocationChange
  * Task: This function will update the location based off what the user types
  * into the location field on the homepage
    ======================================================================== */
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  /* =========================================================================
  * Function Name: handleAnimalChange
  * Task: This function will set the state the the animal based off what the
  * user selects from the list of selection
    ======================================================================== */
  handleAnimalChange(event) {
    this.setState(
      {
        animal: event.target.value,
        breed: '' // Resets breed to empty string
      },
      this.getBreeds // then automatically called getBreeds once animal changed
    );
  }

  /* =========================================================================
  * Function Name: handleBreedChange
  * Task: This function will update the state with breed selected from the list
  * of selections
    ======================================================================== */
  handleBreedChange(event) {
    this.setState({
      breed: event.target.value
    });
  }

  /* =========================================================================
  * Function Name: getBreeds
  * Task: This function will retrieve the breeds for different animals by using
  * the petfinder API. This will populate the breeds[] in state.
    ======================================================================== */
  getBreeds() {
    // CASE: Animal has been selected, so get breeds for this animal
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      // CASE: Animal hasn't yet been selected, just have breeds as empty
      this.setState({ breeds: [] });
    }
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render the show's markup for a pet. It handles
  * logic for photos because the API will return different sizes of photos.
  * The output will be the photo of the pet with its breed and location.
  *
  * Since Provider is wrapping everything, wherever I instantiate a Context obj
  * I will have the state that Provider is making accessible which is App's
  * state.
  *
  * Provider defines where I am going to get the resources from, in this case it
  * is this file App.js 's state. Note you can have multiple Providers
   ========================================================================= */
  render() {
    return (
      <div>
        <header>
          <Link to="/">Pet Adoption !</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
