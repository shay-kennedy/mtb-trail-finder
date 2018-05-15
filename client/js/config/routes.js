import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import {
  Main,
  TrailsMain,
  TrailsLanding,
  Login,
  TrailList,
  TrailFavorites,
} from '../components'


export default function getRoutes(history, store) {
  return (
    <Router history={history} >
      <Route path="/" component={Main} >
        <IndexRoute component={Login} />
        <Route path="/trails" component={TrailsMain} >
          <IndexRoute component={TrailsLanding} />
          <Route path="list" component={TrailList} />
          <Route path="favorites" component={TrailFavorites} />
        </Route>
      </Route>
    </Router>
  )
}
