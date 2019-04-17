const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked on the title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Pet Adpotion"
      ),
      React.createElement(Pet, {
        name: "JayJay",
        animal: "dog",
        breed: "Chihuahua"
      }),
      React.createElement(Pet, {
        name: "Juelz",
        animal: "dog",
        breed: "Chihuahua"
      }),
      React.createElement(Pet, {
        name: "Hanz",
        animal: "dog",
        breed: "German Shepard"
      })
    ]);
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
