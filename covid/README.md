### COVID-19 NOTES

#### HIERARCHY

| App.js         | withListLoading.js | List.js        | CountryCard.js | Button.js |
| -------------- | ------------------ | -------------- | -------------- | --------- |
| ListLoading.js | List.js            | CountryCard.js | Header.jsx     |           |
| Button.js      |                    |                | ShowCard.jsx   |           |
|                |                    |                |                |           |

- `App.jsx`: Renders out ListLoading that is a component that is returned by
  calling `withListLoading.js`. Will also render the `Button.js`
- `withListLoading.js`: With either render a paragraph stating that the API is
  still fetching data OR the actual `<List/>` Component
- `List.js`: Will either render a paragraph of stating no data OR a
  `<CountryCard/>` component
- `CountryCard.js`: Will show details about each country

#### TECH STACK

- Dependency Management: NPM
- Styles: CSS File, Google Fonts
- State Management: React Hooks

#### RESOURCES

- [Covid-19 API](https://api.covid19api.com/summary)
- [Axios and Fetch](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/)
- [React Hooks](https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/)

#### REACT HOOKS

- Built in functions that allow the usage of state and lifecycle methods inside
  **functional components**
- **Advantages**:
  - Improved code use,
  - Better code composition
  - Better defaults
  - Sharing non-visual logic with the use of common hooks
  - Flexibility in moving up and down the components tree
- Built because reusing stateful logic was difficult and that you would have to
  use `classes` and know how `this` keyword works.

#### REACT HOOK RULES

1. Make sure to not use Hooks inside loops, conditions or nested functions
2. Only use Hooks from inside React Functions

#### REACT BASIC HOOKS

1. `useState()`
   - Handles and manipulates the state inside functional components without
     needing to convert it to a class component
   - Receives and initial state as an argument and returns, by making use of
     `destructuring` in JavaScript, the 2 variables which are the actual state,
     and a function that is meant for updating the state by providing a new
     state
2. `useEffect()`
   - Accepts a function that would contain effectual code
   - Ex. mutations, subscriptions, timers, logging
   - The function that is passed into it will execute right after the render
     has been displayed on the screen (like `componentDidMount`)
   - Mostly used for external API data fetching or subscriptions
   - Like a combination of 3 lifecycle methods
     (`componentDidMount, componentDidUpdate, un-mounting`)
3. `useContext()`
   - The hooks works in a way to share data deeply throughout your app without
     the need to manually pass your app props down through various levels
   - Accepts a context object, which is the value that is returned from
     `React.createContext`, and then it returns the current context value for
     that context
   - Easy to give the app context, as compared to before when you used need to
     set up a `contextType` or a `<Consumer>` to access the global state passed
     down from some `provider` in a class component
4. `useReducer()`
   - Used for handling complex states and transitions in state
   - Takes in a `reducer` function and also an initial state input
   - Returns a current state and also a `dispatch` function as output by
     `destructuring`
