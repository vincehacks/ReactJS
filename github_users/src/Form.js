/* Created by Vince Chang */

import React, { Component } from 'react';

class Form extends Component {
  /* =========================================================================
  * Function Name: "constructor"
  * Task: New to ES6 you no longer need a constructor to maintain state.
  * Other functions will no longer need to be bind if they are written as
  * arrow functions!
  *
  * Default state is empty
    ========================================================================= */
  state = { userName: '' };

  /* =========================================================================
  * Function Name: handleSubmit
  * Task: This function will be the handler for when a user hits the
  * Add card button. The github username will be searched in the Github API and
  * if a profile is found, it will return information about that profile as a
  * response
    ========================================================================= */
  handleSubmit = event => {
    event.preventDefault();
    console.log('Event: Form submit', this.state.userName);

    /* Using fetch, returns back a promise, that needs to be transformed
     * into a json object, and passes this as a parameter into onSubmit.
     */
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        return resp.json();
      })
      .then(this.props.onSubmit);

    // Resets the input field to blank
    this.setState({ userName: '' });
  };

  /* =========================================================================
  * Function Name: render
  * Task: This function will be responsible for showing the input field
  * and button. When the user types in a username in the input field, the state
  * is updates the username to the input provided. When the button is clicked,
  * handleSubmit() is executed where it will provide the fetched profile from
  * Github 's API to the onSubmit function that has been passed in via props.
  * To follow this flow, go back to App.js to view onSubmit().
    ========================================================================= */
  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="Github Username"
            required
          />
          <button type="submit"> Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
