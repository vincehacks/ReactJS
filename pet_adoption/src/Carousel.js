// Created by Vince Chang

import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  // New component life cycle method, everytime props change, this is run so
  // state can be updated. This is static because it will just take props and
  // return back some state and can call Carousel.getDerivedStateFromProps
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    // Returns you an array of photos that have pn as their size
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  handleIndexClick(event) {
    // dataset will contain anything that has data-SOMETHING
    // + will take a string and turn into a number
    this.setState({
      active: +event.target.dataset.index
    });
  }

  render() {
    // Destructoring
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
