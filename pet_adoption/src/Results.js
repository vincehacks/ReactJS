// Created by Vince Chang

import React from 'react';
import Pet from './Pet';
import pf from 'petfinder-client';
import { Consumer } from './SearchContext';
import SearchBox from './SearchBox';

const petFinder = pf({});

class Results extends React.Component {
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
    this.state = { pets: [] };

    this.search = this.search.bind(this);
  }

  /* =========================================================================
  * Function Name: componentDidMount (used for fetching info)
  * Task: This function will is reserved for React. Upon connecting to the DOM
  * it will delegate to search() to fetch data using the petfinder API using
  * information provided in props to locate the exact animal object in the API
  *
  * This is a separate function because search should get called every time the
  * Submit button is pressed. If all of search() logic was here, it would only
  * do it one time (once the component mounts to the DOM and never again) to
  * make it reuseable, search logic is separated
    ======================================================================== */
  componentDidMount() {
    this.search();
  }

  /* =========================================================================
  * Function Name: search
  * Task: This function will search for animal using petfinder API, get all
  * required information and populate the pets array in the state with animals
  * that match the search requirements
    ======================================================================== */
  search() {
    // This will go out to the pet finder API and return a promise
    // searchParams is referring to context! Look at the export at the bottom!
    petFinder.pet
      .find({
        output: 'full',
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;

        // Printing the data to the console for debugging
        console.log(data);

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          // Multiple animals
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            // One animal
            pets = [data.petfinder.pets.pet];
          }
        } else {
          // No animals
          pets = [];
        }

        this.setState({
          pets: pets
        });
      });
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render the show's markup for a pet. It handles
  * logic for photos because the API will return different sizes of photos.
  * The output will be the photo of the pet with its breed and location.
  * Also above all the pets, it will show a SearchBox for selecting animals.
  * Will also be able to submit using the button
   ========================================================================= */
  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(', ');
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

// Trick to make context available in other functions outside of render, just
// passed it as a prop to itself to then use anywhere !
// If you have to reference context in life cycle methods, you have to do it
// this way!!!
export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
