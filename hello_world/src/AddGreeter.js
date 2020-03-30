/* Created by Vince Chang */

import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
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
    this.state = { greetingName: '' };
    // Letting JS know that 'this' refers to the instance in this class
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  /* =========================================================================
  * Function Name: handleUpdate
  * Task: This function will update the state which contains the greeting, the
  * event passed in is onChange
    ========================================================================= */
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  /* =========================================================================
  * Function Name: addGreeting
  * Task: This function will call addGreeting() that has been passed in from
  * props. This function will pass the greetingName to be added.
  * Follow HelloWorldList's addGreeting() to complete the flow.
    ========================================================================= */
  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render out a input field for the user to type in a
  * name for a new card to be created. When the user types, the state is changed
  * to what the user types in. WHen the button is clicked, addGreeting() is
  * called and will pass in the name to teh addGreeting() in HelloWorldList
    ========================================================================= */
  render() {
    return (
      <div className="AddGreeter">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.greetingName}
        />
        &nbsp; &nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    );
  }
}

export default AddGreeter;
