var React = require("react");
var Provider = require('react-redux').Provider;
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './main';
import TrailsMain from './trails-main';
import TrailsLanding from './trails-landing';
import Login from './login-main';
import store from '../redux/store';
import TrailList from './trail-list';
import TrailFavorites from './trail-favorites';


var routes = (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={Main} >
				<IndexRoute component={Login} />
				<Route path="/trails" component={TrailsMain} >
					<IndexRoute component={TrailsLanding} />
					<Route path="list" component={TrailList} />
					<Route path="favorites" component={TrailFavorites} />
				</Route>
			</Route>
		</Router>
	</Provider>
);


module.exports = routes;

