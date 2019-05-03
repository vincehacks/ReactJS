// Created by Vince Chang

import React, { Component } from "react";

class Form extends Component {
  // Default state, so it shows empty in the input field
  state = { userName: "" };

  /* Function: handleSubmit
   * Description: This function will be the handler for when a user hits the
   * Add card button. The github username will be searched in the github API and
   * if a profile is found, it will return information about that profile as a
   * response
   */
  handleSubmit = event => {
    event.preventDefault();
    console.log("Event: Form submit", this.state.userName);

    /* Using fetch, returns back a promise, that needs to be transformed
     * into a json object, and passes this as a parameter into onSubmit.
     */
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        return resp.json();
      })
      .then(this.props.onSubmit);

    // Resets the input field to blank
    this.setState({ userName: "" });
  };

  /* Function: render
   * Description: This function will be responsible for showing the input field
   * and button.
   */
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "inline-block", marginLeft: 60, marginTop: 70 }}
      >
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github username"
          required
        />
        <button type="submit"> Add Card</button>
      </form>
    );
  }
}

export default Form;
