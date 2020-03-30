/* Created by Vince Chang */

import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
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
    this.state = { greeting: 'Hello ' };
    // This tells JavaScript that any time I see 'this' in chineseify, I want
    // you to refer to ME!
    this.chineseify = this.chineseify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  /* =========================================================================
  * Function Name: chineseify
  * Task: This function will set the state to say hello in Chinese
  *
  * You can't modify the state inside a class by doing state = blah
  * Need to use React's setState() function that will update the state
    ========================================================================= */
  chineseify() {
    this.setState({ greeting: 'Ni Hao ' });
  }

  /* =========================================================================
  * Function Name: removeGreeting
  * Task: This function will remove a greeting by calling the removeGreeting
  * function that was passed in via props. This function will remove the name
  * that was also passed in from props. Follow removeGreeting in HelloWorldList
    ========================================================================= */
  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  /* =========================================================================
  * Function Name: render
  * Task: This function will render a dive with the greeting defined in state
  * and the name passed in from props. There are two buttons that will either
  * Chineseify a greeting or remove a greeting
    ========================================================================= */
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.chineseify}>Chineseify!</button>
        <br />
        <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

// Export this component so it could be used in other files!
export default HelloWorld;
