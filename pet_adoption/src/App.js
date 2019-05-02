import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

const petfinder = pf({});

class App extends React.Component {
  // Moving all of the state logic on app itself so I can use provider and
  // consumers to pass props to the correct componenets
  constructor(props) {
    super(props);

    this.state = {
      location: "San Francisco, CA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange.bind(this),
      handleBreedChange: this.handleBreedChange.bind(this),
      handleLocationChange: this.handleLocationChange.bind(this),
      getBreeds: this.getBreeds
    };
  }
  // Update Location
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }
  // Update Animal they want to search
  handleAnimalChange(event) {
    this.setState(
      {
        animal: event.target.value,
        breed: ""
      },
      this.getBreeds
    );
  }
  // Update the breed per animal
  handleBreedChange(event) {
    this.setState({
      breed: event.target.value
    });
  }
  // Retrieve the different breeds per animal
  getBreeds() {
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
      this.setState({ breeds: [] });
    }
  }
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
ReactDOM.render(<App />, document.getElementById("root"));
