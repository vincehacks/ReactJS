// Created by Vince Chang

import React from 'react';

class Carousel extends React.Component {
  /* =========================================================================
  * Function Name: constructor
  * Task: This function will bind the state
  * Every time you call .bind will create a new function, so that's why do it
  * in the constructor, but good thing it will only happen once
  * In newer JS, you no longer need to write the constructor if you write
  * functions using the arrow function, it will automatically do the binding
  * refer to transform-class-properties
  *
  * photos will be the array of photos to loop thorough for each animal
   ========================================================================= */
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  /* =========================================================================
  * Function Name: getDerivedStateFromProps
  * Task: This function is a new React component life cycle method, every time
  * that props change, this function is evoked so state can be updated. This
  * method is static because it will just take props and return back some state
  * by calling:
  * Carousel.getDerivedStateFromProps
  *
  * Will need to be static because it will only live on the class level, you
  * won't ever edit state anyways, just return back state
   ========================================================================= */
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    // Returns you an array of photos that have pn as their size (narrows down)
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
    }

    return { photos: photos };
  }

  /* =========================================================================
  * Function Name: handleIndexClick
  * Task: This function is a response to when the picture is clicked
  *
  * IMPORTANT: event.target.dataset.index will refer to data-index that is set
  * in the render function. If I were to call the field "data-something" then,
  * I would have to access it like this "event.target.dataset.something"
   ========================================================================= */
  handleIndexClick(event) {
    // + will take a string and turn into a number (quick hand way to cast)
    this.setState({
      active: +event.target.dataset.index
    });
  }

  /* =========================================================================
    * Function Name: render
    * Task: This function will render all the pictures that come with a certain
    * pet.
     =========================================================================*/
  render() {
    // Destructuring: photos = this.state.photos, active = this.state.active
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              <img
                onClick={this.handleIndexClick}
                key={photo.value}
                data-index={index}
                src={photo.value}
                className={index === active ? 'active' : ''}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
