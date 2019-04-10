# Webpack

Created by Vince Chang </br>

- [Tutorial Link](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)

#### What is Webpack

- Webpack is module bundler that runs at build time. It doesn't run during the page, but during development
- Webpack is a tool that uses **configuration** to tell it how to load things
- Webpack will look at entire code and figures out what it needs, in what order and all the dependencies
- Finally creates a **bundle** as few and as optimized as possible to include as scripts in the application

#### Asynchronous by Default

- **Javascript will try to load everything at once by default**
- This behavior is called **Asynchronous** when executing code, it **begins** to run it and **keeps going** before it finishes

#### Modules

- Modules were introduced so that script **encapsulation** can be bundled by a module
  \_ Modules can be loaded easily and also have **dependencies** that will ensure some scripts are loaded before others in the correct order.

#### The Solution

- **Module Loaders** is usually a tool or script which a developer passes their Javascript through
- It is a tool who's job it is to make sure the scripts run in the way you expect it to without worrying about the overhead
- Responsible for:
  1. Determining load priority
  2. Dependencies
  3. Efficiency
  4. Paths
