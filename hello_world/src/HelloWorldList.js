/* Created by Vince Chang */

import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
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
    this.state = { greetings: ['VINCE', 'CHANG', 'AHMA'] };
    // Passing down the addGreeting function
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  /* =========================================================================
  * Function Name: renderGreetings
  * Task: This function will map over the greetings array that is provided in
  * state and for each greeting in greetings, will render a new HelloWorld
  * component
    ========================================================================= */
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} />
    ));
  }

  /* =========================================================================
  * Function Name: addGreeting
  * Task: This function will add newName to the greetings array which the state
  * handles.
  *
  * The spread operator is used here in this array so I can do a quick way
  * of appending newName to the end of this array
    ========================================================================= */
  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  /* =========================================================================
  * Function Name: removeGreeting
  * Task: This function will remove a name from the greetings HelloWorldList
  * The filter function will return back a list that excludes the removeName
  * The result of the filter is set as the new state for greetings.
    ========================================================================= */
  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render a AddGreeter component and pass it the
  * addGreeting function as a prop
  *
  * renderGreetings is automatically evoked which will render HelloWord
  * components for every name in the greetings array (initially there are three
  * greetings in the array which are VINCE, CHANG, and AHMA)
    ========================================================================= */
  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}

export default HelloWorldList;
