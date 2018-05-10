# ReactJS
Created by Vince Chang </br>

In this exercise, I have built a single-page application website for a local
sports team. Set up included choosing a router, creating routes and navigating
between routes using links.
- [Tutorial Link](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)


# Questions
    1. Which type of router am I going to use?
    2. Ask to see where just the routes are held
    3. Do I have to use <Switch> to group routes or just have one place without
    a <Switch> component?
    4. Examples with the props passed to <Route>
    5. When a path matches the route, a match object is created, but where?
    6. Match params, where are the rest of the props? accessing it how?


#### What is React Router
- React Router keeps your UI in sync with the URL. It has a simple API with
powerful features like lazy code loading, dynamic route matching, and location
transition handling built right in. Make the URL your first thought, not an
after-thought.
- The router will also be a ***Component***


#### Installation
- React Router has been broken into 3 packages:
    1. react-router
    2. react-router-dom
    3. react-router-native


#### The Router
- The router you use depends on the type of project you are trying to build
- `<BrowserRouter>` should be used when you have a server that will handle
dynamic requests
- `<HashRouter>` should be used for static websites where the server can only
respond to requests for files that it knows about
- Each router has a history object and knows when to re-render based on changes
to that object


#### Rendering a <Router>
- Router components expect to receive a single child element, so its common to
have a `<App>` component to render the rest of the application
```
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```


#### The <App>
- The `<App>`will be rendered by the Router and will be broken into 2 parts:
  1. `<Header>` has all the routes
  2. `<Main>` has the rest of the content (this is where routes are rendered)


#### <Route>
- Anywhere you want to render something from a path, you need a `<Route>`
- `<Route>` expects a path prop
  - ex. `<Route path='/roster'/>`
  - When the current location matches `/roster`, then the route will render a
  react element, if it doesn't match nothing is rendered
  - ex:
```
<Route path='/roster'/>
// when the pathname is '/', the path does not match
// when the pathname is '/roster' or '/roster/2', the path matches
// If you only want to match '/roster', then you need to use
// the "exact" prop. The following will match '/roster', but not
// '/roster/2'.
<Route exact path='/roster'/>
```

#### Matching Paths
- React Router uses the `path-to-regexp` package to determine if a path's prop
matches the current location
- It turns the path string into a regex and matches it against the pathname
- If a path matches, a match object will be created with the following
properties:
  - `url` the matched part of the current location’s pathname
  - `path` the route’s path
  - `isExact` path === pathname
  - `params` an object containing values from the pathname that were captured
  by `path-to-regexp`


#### What does <Route> Render?
- Routes have three props that can be used to define what should be rendered
when the route’s path matches
- Only one should be provided to a <Route> element:
    1. `component` A React component. When a route with a component prop
    matches, the route will return a new element whose type is the provided
    React component (created using React.createElement).
    2. `render` A function that returns a React element. It will be called
    when the path matches. This is similar to component, but is useful for
    inline rendering and passing extra props to the element.
    3. `children` A function that returns a React element. Unlike the prior two
    props, this will ***always*** be rendered, regardless of whether the route’s
    path matches the current location.
```'<Route path='/page' component={Page} />
const extraProps = { color: 'red' }
<Route path='/page' render={(props) => (
  <Page {...props} data={extraProps}/>
)}/>
<Route path='/page' children={(props) => (
  props.match
    ? <Page {...props}/>
    : <EmptyPage {...props}/>
)}/>
```
- The element rendered by the <Route> will be passed a number of props. These
will be the match object, the current location object, and the history object
(the one created by our router)


#### <Main>
- This is where all routes will be rendered
```
import { Switch, Route } from 'react-router-dom'
const Main = () => (
  <main>
    // The route for the homepage includes an exact prop !
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)
```


#### Path Params
- Sometimes you need to get information from the passed in parameters in the URL
- Parameters will be stored in a `match.params` object