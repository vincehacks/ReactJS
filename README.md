# ReactJS
Created by Vince Chang </br>

All of my ReactJS code, exercises, and notes will be found here.

### Hello-World Tutorial Final Product
- This was built using `create-react-app` module
- I have created a project that give users the ability to add or remove users
as well as change the hello greeting.
- https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc
![](https://github.com/vincehacks/ReactJS/blob/master/hello-world/FinalProduct.png)


### Questions:
    1. When should I use `extends component`? Instead of extend React.Component
       - They are the same!
    2. Where do you need to call ReactDOM.render() ? Every file or just in the
       main?
       - Just in the main
    3. Is className suppose to be a CSS class that you create yourself?
       - className is reserved
    4. When you render multiple components you need to have keys
    5. Show example of import and export components, do you separate components
       by file? Or is it better to have more than one component in the same
       file?
       - Depends on what you are trying to build
    6. Why do we pass in props in a constructor and why do we have to call
       super?
       - Only use constructor if it has a state and if you want to attach a
       function to it, we call super to initialize the the component.
    7. What does this.bind do and if you didn’t use it, what would 'this' refer
       to?
       - If I didn’t bind it it would refer to the actual function that I'm
       calling it in as oppose to the component itself
    8. Why do I have to export 'App'?
       - I have to import app to index.js (this is the entry point). create-
       react-app will give index.js to index.html as a minified version!
    9. What does export default COMPONENT do?
       - Tells exactly which component to use. If there were two+ components,
       it would be confusing as to which component to use/import
    10.!== compares both type and value and != just compares value


### REACTJS CODECADEMY PART 1


### I. INTRO TO JSX


#### JSX:
- Is a syntax extension for JS, like a combo of JS and HTML
- Used for react
- JSX elements are treated as JS expressions
- JSX elements can be saved in a variable, passed to a function, stored in an
 object or array, etc
```
    const myArticle = <article> Yo, this is an article. </article>;
```
- JSX elements can have attributes like HTML (like adding style and stuff)
- If a JSX expression takes up more than one line, then you must wrap the
 multi-line JSX expression into parenthesis
- A JSX expression must have exactly one outermost element (Part 1: 9)
Ex:
```
  WORKS:

  const paragraphs = (
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
  );

  DOESN’T WORK:

  const paragraphs = (
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  );
```


#### ReactDOM.render(JSX Expression, where you want to append expression to)
- ReactDOM is the name of the JS Library
- Library contains methods that deal with the DOM in some way or another
- `.render()` is the most common way to render JSX
- Takes a JSX expression, creates a corresponding tree of DOM nodes, and adds
  that tree to the DOM
- What you get is your output on the screen
- The first parameter is appended to whatever element is selected by the second
  parameter
- In my words, the first parameter will show up where you tell it to by the
  second parameter
- The second parameter is the container for the first parameter
- The first parameter is a JSX expression that could be inline or passed as a
  variable that evaluates to a JSX expression
- Ex: ```ReactDOM.render(myList, document.getElementById('app'));```
- ReactDOM.render() only updates DOM elements that have changed thanks to the
  Virtual DOM!
- This is always called at the bottom of a file


### II. ADVANCED JSX


#### class vs className
- The way you use class in HTML is different in JSX
- HTML: `<h1 class="big">Hey</h1>`
- JSX: `<h1 className="big">Hey</h1>`
- This is because JSX gets translated into JS, and class is a reserved word in
JS!
- When JSX is rendered, className is automatically rendered as class attributes


#### Self-Closing Tags
- HTML: `<br>`
- JSX: `</br>`
- All self closing tags in JSX need to have a `/` or there will be an error!


#### JS in JSX
- Use curly braces to use JS in JSX
- Ex. `<h1>{2 + 3}</h1>` this will result to 5 in the browser! If I didn’t use
 curly braces, it would be 2+3


#### Event Listeners in JSX
- Ex. `<img onClick={myFunc} />`
- An event listener attribute’s value should be a function
- **Note** that in HTML, event listener names are written in all lowercase,
such as onclick or onmouseover. In JSX, event listener names are written in
camelCase, such as onClick or onMouseOver


#### JSX Conditionals
- You can not inject an if-statement into a JSX expression, but you could still
do JS in a JSX expression just not if’s


#### .map()
```
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```


#### Keys
- JSX attribute who’s value should be unique, something like an id
- Not all lists need to have keys
- A list needs keys if either of the following are true:
- The list-items have memory from one render to the next. For instance,
  when a to-do list renders, each item must "remember" whether it was checked
  off. The items shouldn't get amnesia when they render.
- A list's order might be shuffled. For instance, a list of search results
might be shuffled from one render to the next.
- If neither of these conditions are true, then you don't have to worry about
keys


### REACT COMPONENTS


#### Your First React Component
- **Component**: small piece of reusable code responsible for rendering HTML
- Every component must come from a component class
- **Component Class**: like a factory of components, if you have a component
class, you can make many of those components
- To create your own component class, you must subclass React.Component
- You can do this by using the syntax
`class YourComponentNameGoesHere extends React.Component {}`
- Component class variable names must begin with capital letters!
- Every component class needs a render function that returns a JSX expression
- Ex.
```
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MyComponentClass extends React.Component {

      render() {
        return <h1>Hello world</h1>;
      }
    }

    // component goes here:
    <MyComponentClass/>
```


#### Components and Advanced JSX
- `this` keyword refers to an instance of a class component object
- When you use `this` and it is a getter method you are referring to, you don’t
need to use parenthesis to call the function (only if it is a getter method)


### COMPONENTS INTERACTING


#### Components Render Other Components
- If you want to use a component that you have declared outside of a class, you
have to import that component!
- `import {NavBar} from './NavBar';`
- `import { faveManifestos, alsoRan } from './Manifestos';`
- When you import a variable from a file that is not the current file, then an
import statement isn't quite enough. You also need an export statement, written
in the other file, exporting the variable that you hope to grab.
- `export class NavBar extends React.Component {`


#### this.props
- Every component has props
- A component’s props holds info about that component
- To see a component’s props object, you use `this.props`
- You can pass info to a react component by giving a component an attribute
- If you want to pass info that isn't a string, then wrap that information in
curly braces.
- Ex.
`<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} /> // 2 is not a string so it needs curly braces!`
- It is common to pass event handler functions as props


#### this.state
- They're 2 ways for a component to get dynamic info (Info that changes):
 **props and state**
- Unlike props, a component’s state is not passed in from the outside. A
component decides its own state
- States are declared inside of constructors
- React components always have to call `super` in their constructors to be set
up properly
- A component can change its state by `this.setState()` that takes 2 parameters
  1. An object that will update the component’s state
  2. A call back (basically never need this)
- `this.setState()` takes an object, and merges that object with the
component’s current state. If there are properties in the current state that
aren’t part of that object, then those properties remain unchanged.
- You **can’t** call `this.setState()` from inside a render function
- When you write a component class method that uses `this`, then you need to
bind that method inside of your constructor function!
- `this.changeColor = this.changeColor.bind(this);`
- Any time that you call `this.setState()`, `this.setState()` AUTOMATICALLY
calls `.render()` as soon as the state has changed.


### REACTJS CODECADEMY PART 2


#### Questions:
    1. Explain the this.function.bind(this) in the parent’s constructor
    2. What is the className used for again
       - To define class styles like in CSS


#### Stateless Components Inherit From Stateful Components
  - If you want to pass a something to another component, you need to pass it
  in the file that gives something. AKA you need to have the child be rendered
  in the class of the giving


#### Don’t Update Props
- A component should **NEVER** update `this.props`
- A React component should use props to store information that can be changed,
but can only be changed by a different component.
- A React component should use state to store information that the component
itself can change.


#### Style
- **Double Curly Braces**: The outer curly braces inject JavaScript into JSX.
They say, "everything between us should be read as JavaScript, not JSX."
- The inner curly braces create a JavaScript object literal. They make this a
valid JavaScript object:
- Ex. `<h1 style={{ color: 'red' }}>Hello world</h1>`
- One way to make styles reusable is to keep them in a separate JavaScript file
- This file should export the styles that you want to reuse, via export. You
can then import your styles into any component that wants them.


#### Container Components From Presentational Components
- Separating container components from presentational components is a popular
React programming pattern.
- **Basic idea behind it**: if a component has to have state, make calculations
based on props, or manage any other complex logic, then that component
shouldn't also have to render HTML-like JSX.


#### Stateless Functional Components
- A component class written as a function is called a stateless functional
component. Stateless functional components have some advantages over typical
component classes. Stateless functional components usually have props passed
to them


#### propTypes
- Useful for 2 reasons
  1. **Prop validation**: ensures that your props are doing what they’re
  suppose to be doing. If props are missing or if they’re present but aren’t
  what you’re expecting, then a warning will bring in the console
  2. **Documentation**: props make it easier to glance at a file and quickly
  understand the component class inside
- If a component expects a prop, then you can give the component class a
propType


#### React Forms
- **uncontrolled component** :is a component that maintains its own internal
state
- **controlled component**: is a component that does not maintain any internal
state.
- Since a controlled component has no state, it must be controlled by someone
else.


### Mounting Life Cycle Methods
- **Life Cycle Methods**: are methods that get called at certain moments in a
component’s life
- You can write a life cycle method that gets called right before a component
renders for the first time or even after a component renders


#### componentWillMount
- When a component renders for the first time, `componentWillMount` gets called
right before render
- ***LIFE CYCLE EVENTS ONLY EXECUTE THE FIRST TIME THAT A COMPONENT RENDERS!***
- If you need to do something only the first time that a component renders,
then it's probably a job for a mounting life cycle method!
- `render` belongs to two categories:
  - mounting life cycle methods
  - updating life cycle methods


#### componentDidMount
- When a component renders for the first time, `componentDidMount` gets called
right after the HTML from render has finished loading
- This is a good place to connect a React app to external applications, such as
APIs or JS frameworks
- Also a good place to set timers using setTimeout or setInterval


### Updating/Unmounting Life cycle Methods


#### componentWillReceiveProps
- When a component instance updates, `componentWillReceiveProps` gets called
before rendering begins
- Gets passed one argument an object called `nextProps` which is a preview of
the upcoming props object that the component is about to receive


#### shouldComponentUpdate
- When a component updates, `shouldComponentUpdate` gets called after
`componentWillReceiveProps`, but still before rendering


#### componentWillUpdate
- `componentWillUpdate` gets called in between `shouldComponentUpdate` and
render
- Receives 2 arguments:
  - `nextProps`
  - `nextState`
- You can’t call `this.setState` from the body of `componentWIllUpdate`
- **Main purpose**: is to interact with things outside of the React
architecture


#### componentDidUpdate
- When a component instance updates, `componentDidUpdate` gets called after any rendered HTML has finished loading
- Passed 2 arguments:
  - `prevProps`
  - `prevState`


#### componentWillUnmount
- A component’s unmounting period begins when the component is removed from the
DOM
- This could happen if the DOM is rerendered without the component, or if the
user navigates to a different website or closes their web browser
- Use this method for cleaning up


[COMPONENT LIFECYCLE](http://busypeoples.github.io/post/react-component-lifecycle/)


#### Initialization
    1. GetDefaultProps
    2. GetInitialState
    3. ComponentWIllMount
    4. Render
    5. ComponentDidMount


#### Updating State
    1. ShouldComponentUpdate
    2. ComponentWillUpdate
    3. Render
    4. ComponentDidUpdate


#### Updating Props
    1. ComponentWillReceiveProps
    2. ShouldComponentUpdate
    3. ComponentWIllUpdate
    4. Render
    5. ComponentDidUpdate


[VIRTUAL DOM](https://www.codecademy.com/articles/react-virtual-dom)

In summary, here's what happens when you try to update the DOM in React:

- The entire virtual DOM gets updated.
- The virtual DOM gets compared to what it looked like before you updated it
- React figures out which objects have changed.
 **(THAT’S WHY THIS IS FASTER AND BETTER)**
- The changed objects, and the changed objects only, get updated on the real
DOM
- Changes on the real DOM cause the screen to change.


### PLURALSIGHT

- React is a JS library not a framework
- Helps build user interfaces
- Does not follow MVC Model


#### Components
- States can be changed, but props can not be changed
- Class components can only change their internal state, not their properties