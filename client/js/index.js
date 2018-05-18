import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import getRoutes from './config/routes'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import * as reducers from './redux'
import { reducer as form } from 'redux-form'

console.log(`Client running in ${process.env.NODE_ENV} mode`)


const allReducers = {
  ...reducers,
  form,
  routing: routerReducer,
}

const store = createStore(
  combineReducers(allReducers),
  compose(
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app')
)
