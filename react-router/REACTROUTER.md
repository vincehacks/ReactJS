# ReactJS
Created by Vince Chang </br>

In this exercise, I have built a single-page application website for a local
sports team. Set up included choosing a router, creating routes and navigating
between routes using links.
- [Tutorial Link](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
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