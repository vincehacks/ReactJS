/* eslint no-console:0 */

require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const App = require('./js/App').default;
const config = require('./webpack.config');

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();

// Intiantiate webpack
const compiler = webpack(config);
server.use(
  webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
  })
);

// Will also handle HotModuleReplacement
server.use(webpackHotMiddleware(compiler));

server.use(compression());

// Bundles everything from the ./public directory
server.use('/public', express.static('./public'));

server.use((req,res) => {
  console.log(req.url);
  const context = {};
  // Instead of telling ReactDOM where to render, it gives back HTML of the string
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter,{location:req.url, context},
      React.createElement(App)
    )
  );

  // Handling Redirction to get to the correct page
  if(context.url){
    res.redirect(context.url);
  }

  // Finally write the HTML
  res.write(template({body}));
  res.end();
});

console.log(`listening on port ${port}`);
server.listen(port);