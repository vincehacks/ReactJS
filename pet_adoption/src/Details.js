import React from "react";
import pf from "petfinder-client";
import Carousel from "./Carousel";

const petfinder = pf({});

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        let breed;
        const pet = data.petfinder.pet;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          breed,
          media: pet.media,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
  render() {
    if (this.state.loading) {
      return <h1> loading... </h1>;
    }

    const { name, animal, breed, location, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1> {name} </h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <p> {description} </p>
        </div>
      </div>
    );
  }
}

export default Details;
