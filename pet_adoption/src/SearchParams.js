import React from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({});

class SearchParams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "San Francisco, CA",
      animal: "",
      breed: "",
      breeds: []
    };

    // Binding all event handlers
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAnimalChange = this.handleAnimalChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
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
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            id="animal"
            value={this.state.animal}
          >
            <option />
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
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            id="breed"
            value={this.state.breed}
            disabled={this.state.breeds.length === 0}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
