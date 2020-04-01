// Created by Vince Chang

import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

class SearchBox extends React.Component {
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

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* =========================================================================
  * Function Name: handleFormSubmit
  * Task: This function will take use this.props.search which comes from
  * Results.js
    ======================================================================== */
  handleFormSubmit(event) {
    // preventDefault is so that form doesn't actually submit to server
    event.preventDefault();
    this.props.search();
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render Location, Animal and Breed fields for
  * searching for an animal. The Animal and Breed fields will both be Selections
  *
  * By importing and wrapping everything in Consumer, I know how everything
  * available from the Provider which is defined in App.js
  *
  * Everything in App.js 's state can now be referenced by using "context"
  * In other words, "context" is just the state of App.js
  * Ex. context.handleAnimalChange
   ========================================================================= */
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  onChange={context.handleLocationChange}
                  id="location"
                  value={context.location}
                  placeholder="location"
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                  id="animal"
                  value={context.animal}
                >
                  <option value="">All Animals</option>
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                Breed
                <select
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  id="breed"
                  value={context.breed}
                  disabled={context.breeds.length === 0}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
