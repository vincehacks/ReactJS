import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petFinder = pf({});

class App extends React.Component {
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
        // if (data.petFinder.pets && data.petFinder.pets.pet) {
        //   // Multiple animals
        //   if (Array.isArray(data.petFinder.pets.pet)) {
        //     pets = data.petFinder.pets.pet;
        //   } else {
        //     // One animal
        //     pets = [data.petFinder.pets.pet];
        //   }
        // } else {
        //   // No animals
        //   pets = [];
        // }
        //
        // this.setState({
        //   pets: pets
        // });
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
      <div>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
        <h1>Pet Adoption</h1>
        <Pet name="JayJay" animal="dog" breed="Chihuahua" />
        <Pet name="Juelz" animal="dog" breed="Chihuahua" />
        <Pet name="Hanz" animal="dog" breed="German Shepard" />
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

ReactDOM.render(<App />, document.getElementById("root"));
