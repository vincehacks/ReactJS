# ReactJS
All React Code


### REACTJS CODECADEMY PART 1


### Questions:
    1. Did you follow the rule of having one most outer element in the React
       code?
        - yes
    2. Where do you need to call ReactDOM.render() ? Every file or just in the
       main?
       - Just in the main
    3. Is className suppose to be a CSS class that you create yourself?
       - className is reserved 
    4. When you render multiple components you need to have keys
    5. Do we utilize the Keys attribute in maps at all in our Macy’s code?
       - Yes
    6. Show example of import and export components, do you separate components
       by file? Or is it better to have more than one component in the same
       file?
       - Depends on what you are trying to build
    7. Why do we pass in props in a constructor and why do we have to call
       super?
       - Only use constructor if it has a state and if you want to attach a
       function to it, we call super to initialize the the component?
 
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



