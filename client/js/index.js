import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import routes from './config/router'
import getRoutes from './config/routes'
import store from './redux/store'

console.log(`Client running in ${process.env.NODE_ENV} mode`)

ReactDOM.render(getRoutes(hashHistory, store), document.getElementById('app'))
