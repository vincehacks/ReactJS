### Vince's Netflix Notes


#### React & ReactDOM
- React is split into 2 parts on purpose (react and react-dom)
- ReactDOM has different renders that you can use for web, mobile, or VR


#### React.CreateElement
- Robust way of creating an element
- Takes strings like html tags to render or actual React components


#### Class Components
- Alternative way, and most common way of creating React components
- Always have a render()
- More flexible than function components


#### Webpack
- Does minifying: removes whitespace, comments, etc to make the smallest
weight to your code
- Gives you a free web server
```
yarn dev
```
- Instead of having multiple script tags, you can have everything inside WP
- Can configure WP through the CLI, need to know entry/exit points


#### Babel
- Takes ES6 code and transforms it to ES5 code which all browsers understand
- Converts JSX into JS and Arrow functions into actual functions
- Web pack and Babel work together because WP does the packaging and Babel does
the transformation


#### React Router
- Use **BrowserRouter** instead of HashRouter
- Wrap routes in a <Switch> component (optional)


#### State
- States can change and update themselves, **props can not**
- Functional components don't have a state, states use ES6 class components!
- ES6 class components MUST have a render() that will return HTML
- States can update themselves using setState()


#### Jest (for testing)
- Same testing as Jasmine Tests
- Snapshots are only in Jest not in Jasmine
- Automatically runs Babel & finds the test file
- Most companies use **enzyme** for testing
- For test coverage, use **Istanbul** for test coverage built in automatically
```
yarn test
```
- If you want to stop a test from running without commenting the code, you can
put a "x" in front of "test" , then this test will be skipped


#### Hot Module Replacement (HMR)
- Webpack can see all the dependancies so instead of rebuilding a graph of one
module that doesn't have any dependancies, webpack knows to just leave the
module alone and not have to re-build it! Hence, Hot Module Replacement


#### Component Lifecycle
- ComponentDidMount = first time around this will get called
- Make API calls here or use AJax
- This is the most important lifecycle method, called once per React component


#### Redux (State Management Framework)
- Similar to Flux
- Makes state management really testable
- If I weren't to use Redux, I would have to pass data all the way down from
component, this would be hard to maintain
- Use React's setState for React State and Redux for application state


#### Testing Redux
- Free test cases for Redux come with the Chrome plugin
- Can get more than just Jest tests
- Test never read from the DB
- Selenium integration can test apps from top to bottom


#### Context (Example of this in pet_adoption project)
- This is someone like Redux, but built into React16
- Instead of passing props down from component to component to a component that
needs that prop which is located a few layers down, you can just access using
context, therefore don’t need to pass prop all the way down like a relay


#### Universal Rendering
- Server side rendering
- Improves load time


#### Code Splitting
- Out of Server-side rendering, HMR, and Code Splitting, you can only choose 2
- Idea: Loads only the JS for the pages you are visiting, instead of loading
everything all at once
- Cuts down the bundle size and only loads the JS for that particular page


#### Using Create React App
- 4 Commands:
```
yarn start : starts the dev server
yarn run build : bundles the app into static files for production
yarn test : starts the test runner (jest)
yarn run eject : removes this tool & copies bundle dependencies, config files
and scripts
```

### Questions:
    1. What happens when you don't bind an instance in the constructor of an
    event handler?
       - When you call this.something, you are referring to the function that
       "this" was called in. If you want it to refer to the App's function, then
       you need to bind the function so it knows when "this" is referred to in
       the actual function, it will refer to the App instead of the function it
       was called in.

    2. Do you use flow or typescript & ES Lint/ recommend it?
       - Typescript

    3. Do I need Ajax to make API calls? Where does Express fit in? Is this
    going to be called in componentDidMount?
       - Express is the middleware that can open the port between my app and
       the calling API, I communicate to Express and Express communicates to the
       API

    4. What version of React should I be learning?
       - Always the newest version, aka React 16

    5. Should I use a mix of functional components or class components?
       - Depends, no state use functional, state, use class

    6. Explain JS String Literal = `${this.blah}`?
       - It is like a placeholder and you can insert string from a function etc.

    7. Why do you have to say export default Component_name when wanting to
    export the component, what’s with the default?
    - "import" & "export" are from ES6

    Named exports - for example export function func() {} is a named export
    with the name of func. Named modules can be imported using import {
    exportName } from 'module';. In this case, the name of the import should be
    the same as the name of the export. To import the func in the example,
    you'll have to use import { func } from 'module';. There can be multiple
    named exports in one module.

    Default export - is the value that will be imported from the module, if you
    use the simple import statement import X from 'module'. X is the name that
    will be given locally to the variable assigned to contain the value, and it
    doesn't have to be named like the origin export. There can be only one
    default export.

- [Explanation](https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default)
