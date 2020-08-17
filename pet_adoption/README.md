### PET ADOPTION NOTES

#### HIERARCHY

| App.js          | Results.js   | Details.js  | SearchParams.js | SearchBox.js | Pet.js | Carousel.js | Modal.js |
| --------------- | ------------ | ----------- | --------------- | ------------ | ------ | ----------- | -------- |
| Results.js      | SearchBox.js | Carousel.js | SearchBox.js    |              |        |             |          |
| Details.js      | Pet.js       | Modal.js    |                 |              |        |             |          |
| SearchParams.js |              |             |                 |              |        |             |          |

- `App.js`: Entry point
- `Results.js`: This is the homepage that provides SearchBox and list of Pets
- `Details.js`: When you click on a Pet you can see the details about it
- `SearchParams.js`: Will render SearchBox.js
- `SearchBox.js`: Will provide animal search by location, animal, and breed
- `Pet.js`: Provides photo, description, name, breed, location
- `Carousel.js`:` So you can see all the pictures that come with each animal
- `Modal.js`: Shows a pop-up box that asks if you would like to adopt the animal

#### TECH STACK

- Dependency Management: Yarn
- Dynamic Routing: Reach Router
- Bundler/minifier: Parcel
- Styles: CSS File & mix of Styled Components
- API Communication: Axios, Express, NodeJS
- State Management: React 16 inbuilt createContext (Provider and Consumer)

#### DIFFERENCE OF TECHNOLOGIES USED IN NETFLIX VS PET ADOPITON

- Look at netflix/README.md for more detailed notes, here will explain the
  differences
- Main differences in pet adoption: Parcel is used instead of Webpack, Reach
  Router is used instead of React Router, React's inbuilt createContext is used
  instead of Redux

#### REACT & REACTDOM

- React is split into 2 parts on purpose (react and react-dom)
- ReactDOM has different renders that you can use for web, mobile, or VR

#### React.CreateElement

- Robust way of creating an element
- Takes strings like html tags to render or actual React components

#### CLASS COMPONENTS

- Alternative way, and most common way of creating React components
- Always have a render()
- More flexible than function components

#### PRETTIER

- Prettier is a formatter for code
- Install with:

```bash
yarn install prettier
```

- Good to include for formatting in package.json

```bash
"format": "prettier --write --tab-width=2 \"js/**/*.{js,jsx}\""
```

#### PARCEL

- Like webpack, but better for smaller projects
- In Netflix project, I had to configure webpack and also add a few commands to
  scripts in package.json, this time it is just one line
- Another cool thing is that if the dev server is running, and you need to
  install a dependency or something new (aka yarn add react), parcel will
  automatically download anything you need and add it to node_modules!
- Does minifying (packager): removes whitespace, comments, etc to make the
  smallest weight to your code
- Gives you a free web server

```bash
yarn dev
```

- How to bundle up code using webpack (add this to package.json):

```json
"dev": "parcel src/index.html",
```

#### REACH ROUTER

- React Router is more famous, but Reach Router is a litte more sophisticated
- Here are the reasons why:
- Does not need a `<switch>` because it will be smart enough to know that it can
  only route to one page at a time
- Does not need the **exact** attribute because again, it is smart enough to
  know which to route to

#### STATE

- States can change and update themselves, **props can not**
- Functional components don't have a state, states use ES6 class components!
- ES6 class components MUST have a render() that will return HTML
- States can update themselves using setState()

#### COMPONENT LIFE CYCLE

- ComponentDidMount = first time around this will get called
- Make API calls here or use AJax
- This is the most important life cycle method, called once per React component
- ComponentWillUnmount = clean up at the end (like remove listeners etc.)

#### CONTEXT

- This is someone like Redux, but built into React16
- Instead of passing props down from component to component to a component that
  needs that prop which is located a few layers down, you can just access using
  context, therefore don’t need to pass prop all the way down like a relay
