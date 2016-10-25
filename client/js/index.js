// import 'babel-polyfill';
var React = require("react");
import { render } from 'react-dom';
var routes = require ('./components/router');
import Main from './components/main';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

render(routes, document.getElementById('app'));
