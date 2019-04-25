import React from "react";

class Pet extends React.Component {
  render() {
    // Destructing an object so I can refer to the prop passed in
    const { name, animal, breed, media, location } = this.props;
    let photos = [];

    // If filter is true, it stays in the array, if filter is false, it is kicked out of the array
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] == "pn");
    }
    return (
      <div className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}

// const Pet = props => {
// return React.createElement("div", {}, [
//   React.createElement("h1", {}, props.name),
//   React.createElement("h2", {}, props.animal),
//   React.createElement("h2", {}, props.breed)
// ]);
// return (
//   <div>
//     <h1>{props.name}</h1>
//     <h2>{props.animal}</h2>
//     <h2>{props.breed}</h2>
//   </div>
// );
// };

export default Pet;
