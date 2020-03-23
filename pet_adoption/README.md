### Vince's Pet Adoption Notes

#### Hierarchy

| App.js          | Results.js   | Details.js  | SearchParams.js | SearchBox.js | Pet.js | Carousel.js | Modal.js |
| --------------- | ------------ | ----------- | --------------- | ------------ | ------ | ----------- | -------- |
| Results.js      | SearchBox.js | Carousel.js | SearchBox.js    |              |        |             |
| Details.js      | Pet.js       | Modal.js    |                 |              |        |             |
| SearchParams.js |              |             |                 |              |        |             |

- App.js: Entry point
- Results.js: This is the homepage that provides SearchBox and list of Pets
- Details.js: When you click on a Pet you can see the details about it
- SearchParams.js: Will render SearchBox.js
- SearchBox.js: Will provide animal search by location, animal, and breed
- Pet.js: Provides photo, description, name, breed, location
- Carousel.js: So you can see all the pictures that come with each animal
- Modal.js: Shows a pop-up box that asks if you would like to adopt the animal

#### Tech Stack

- Dependency Management: Yarn
- Dynamic Routing: Reach Router
- Bundler/minifier: Parcel
- Styles: CSS File & mix of Styled Components
- API Communication: Axios, Express, NodeJS
- State Management: Redux

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

#### Prettier

- Prettier is a formatter for code
- Install with:

```
yarn install prettier
```

- Good to include for formatting in package.json

```
"format": "prettier --write --tab-width=2 \"js/**/*.{js,jsx}\""
```

#### Parcel

- Like webpack, but better for smaller projects
- In Netflix project, I had to configure webpack and also add a few commands to
  scripts in package.json, this time it is just one line
- Another cool thing is that if the dev server is running, and you need to
  install a dependency or something new (aka yarn add react), parcel will
  automatically download anything you need and add it to node_modules!
- Does minifying (packager): removes whitespace, comments, etc to make the
  smallest weight to your code
- Gives you a free web server

```
yarn dev
```

- How to bundle up code using webpack (add this to package.json):

```
"dev": "parcel src/index.html",
```

#### Babel

- Takes ES6 code and transforms it to ES5 code which all browsers understand
- Converts JSX into JS and Arrow functions into actual functions
- Web pack and Babel work together because WP does the packaging and Babel does
  the transformation

#### Reach Router

- React Router is more famous, but Reach Router is a litte more sophisticated
- Here are the reasons why:
- Does not need a `<switch>` because it will be smart enough to know that it can
  only route to one page at a time
- Does not need the **exact** attribute because again, it is smart enough to
  know which to route to

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

- Webpack can see all the dependencies so instead of rebuilding a graph of one
  module that doesn't have any dependencies, webpack knows to just leave the
  module alone and not have to re-build it! Hence, Hot Module Replacement

#### Component life cycle

- ComponentDidMount = first time around this will get called
- Make API calls here or use AJax
- This is the most important life cycle method, called once per React component

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
