import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petFinder = pf({});

class Results extends React.Component {
  constructor(props) {
    // This calls React.Component's constructor and passes the props of there
    //so react knows how to track the props
    super(props);
    this.state = { pets: [] };
  }
  componentDidMount() {
    // This will go out to the API and return a promise
    petFinder.pet
      .find({ output: "full", location: "San Francisco, CA" })
      .then(data => {
        let pets;

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

    // Short way by using JSX
    return (
      <div className="search">
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

export default Results;
