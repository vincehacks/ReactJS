import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Pet Adoption ! </h1>
        <Results />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
