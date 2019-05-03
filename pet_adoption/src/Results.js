// Created by Vince Chang

import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";
import { Consumer } from "./SearchContext";
import SearchBox from "./SearchBox";

const petFinder = pf({});

class Results extends React.Component {
  constructor(props) {
    // This calls React.Component's constructor and passes the props of there
    //so react knows how to track the props
    super(props);
    this.state = { pets: [] };

    this.search = this.search.bind(this);
  }
  componentDidMount() {
    this.search();
  }
  search() {
    // This will go out to the petfinder API and return a promise
    petFinder.pet
      .find({
        output: "full",
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
  render() {
    // Short way by using JSX
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
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

// This is the long way to using React.createElement

// return React.createElement("div", {}, [
//   React.createElement(
//     "h1",
//     { onClick: this.handleTitleClick },
//     "Pet Adpotion"
//   ),
//   React.createElement(Pet, {
//     name: "JayJay",
//     animal: "dog",
//     breed: "Chihuahua"
//   }),
//   React.createElement(Pet, {
//     name: "Juelz",
//     animal: "dog",
//     breed: "Chihuahua"
//   }),
//   React.createElement(Pet, {
//     name: "Hanz",
//     animal: "dog",
//     breed: "German Shepard"
//   })
// ]);

// FUNCTIONAL COMPONENT EQUIVALENT!
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Pet Adpotion"),
//     React.createElement(Pet, {
//       name: "JayJay",
//       animal: "dog",
//       breed: "Chihuahua"
//     }),
//     React.createElement(Pet, {
//       name: "Juelz",
//       animal: "dog",
//       breed: "Chihuahua"
//     }),
//     React.createElement(Pet, {
//       name: "Hanz",
//       animal: "dog",
//       breed: "German Shepard"
//     })
//   ]);
// };

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
