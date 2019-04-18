import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petFinder = pf({});

class App extends React.Component {
  componentDidMount() {
    // This will go out to the API and return a promise
    const promise = petFinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
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
