/* Created by Vince Chang
 * This is an ES6 Class based React component that will allow me to use and
 * maintain state!
 * All class base react components need a render method and must return markup
 */

import React from 'react';
import Header from './Header';
import axios from 'axios';

class Details extends React.Component {
  /* =========================================================================
 * Function Name: constructor
 * Task: This function will bind the state
 * Every time you call .bind will create a new function, so that's why do it in
 * the constructor, but good thing it will only happen once
 * In newer JS, you no longer need to write the constructor if you write
 * functions using the arrow function, it will automatically do the binding
 * refer to transform-class-properties
   ========================================================================= */
  constructor(props) {
    super(props);

    this.state = {
      apiData: { rating: '' }
    };
  }

  /* =========================================================================
 * Function Name: componentDidMount
 * Task: This React Life Cycle function is needed for fetching data from APIs
 * This is an example of using axios to fetch data from an api
 * Start API: yarn api (this needs to run before trying it out!)
   ========================================================================= */
  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then(response => {
        this.setState({ apiData: response.data });
      });
  }

  /* =========================================================================
 * Function Name: render
 * Task: This function will render the show's markup and wait for user to input
 * text in the search bar. This wIll also render the rating returned back from
 * the API fetch call
   ========================================================================= */
  render() {
    /* This is de-structoring, all of show's props will be stored and
     * available as the name
     * Equivalent to: const title = props.show.title...etc*/
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    // If I get something back from the API then set the rating component as h3
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      // Otherwise show this message while waiting for rating to return
      ratingComponent = <h3> Fetching Rating from API... </h3>;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Details;
