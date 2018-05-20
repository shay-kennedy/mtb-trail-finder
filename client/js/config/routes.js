import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { TrailsLanding, Login } from '../components'
import {
  Main,
  TrailFavorites,
  TrailList,
  TrailsMain,
} from '../containers'


const getRoutes = (history) => {
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

export default getRoutes