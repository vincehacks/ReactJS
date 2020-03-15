// Created by Vince Chang

import React, { Component } from 'react';
import './AddGreeter.css';

// This class will give the functionality to add to the list of components
class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    // Letting JS know that 'this' refers to the instance in this class
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  // Updating the state which contains the greeting, the event passed in
  // is onChange!
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  addGreeting() {
    // This calls the function that was passed in via props and passes that
    // function greetingName out of state
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }

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
