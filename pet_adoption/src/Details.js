// Created by Vince Chang

import React from 'react';
import pf from 'petfinder-client';
import Carousel from './Carousel';
import Modal from './Modal';

const petfinder = pf({});

class Details extends React.Component {
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

    this.state = {
      loading: true,
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  /* =========================================================================
  * Function Name: componentDidMount (used for fetching info)
  * Task: This function will is reserved for React. It will use the petfinder
  * API and get the information of a pet using the id. It will then return back
  * a promise that can be iterated over to find out the breed. After getting the
  * object, now can set the state for all other fields
  *
  * NOTE: That one animal can have a mix of breeds or can just be a pure breed
  * The if-else logic will handle if a animal has more than one breed or is a
  * single breed
    ======================================================================== */
  componentDidMount() {
    petfinder.pet
      .get({
        output: 'full',
        id: this.props.id
      })
      .then(data => {
        let breed;
        const pet = data.petfinder.pet;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(', ');
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
          loading: false // loading is set to false, now having fetched all data
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  /* =========================================================================
  * Function Name: toggleModal
  * Task: This function will be evoked when a user clicks on the adopt me button
  * There is logic in the render() that will do the opposite of what the current
  * state is for showModal which is true or false. This will toggle between both
  * If true, the Modal component will be shown, otherwise nothing.
    ======================================================================== */
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render the details about a pet
   ========================================================================= */
  render() {
    // While componentDidMount is fetching data, show this message
    if (this.state.loading) {
      return <h1> loading... </h1>;
    }

    // Destructuring: name = this.state.name ...etc
    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1> {name} </h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p> {description} </p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt me?</h1>
              <button onClick={this.toggleModal}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
