// import 'babel-polyfill';
var React = require("react");
// import { render } from 'react-dom';
// var render = require('react-dom').render
import ReactDOM from 'react-dom'
var routes = require ('./components/router');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

ReactDOM.render(routes, document.getElementById('app'));
