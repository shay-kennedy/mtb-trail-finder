var React = require("react");
var connect = require('react-redux').connect;
var actions = require('../redux/actions');
var Input = require('./input');
var FavoriteDetail = require('./favorite-detail');


var TrailFavorites = React.createClass({
	render: function(props) {
		// Maps through array of favorite trail passing in props to FavoriteDetail componenet
		var favoriteList = this.props.favorites.map(function(favorite) {
			return (
				<FavoriteDetail 
					key={favorite.trail_id}
					trail_id={favorite.trail_id}
					city={favorite.city} 
					state={favorite.state} 
					name={favorite.name}
					url={favorite.url} 
					length={favorite.length}
					description={favorite.description}
					directions={favorite.directions}
				/>
			)
		});
		// Returns each favorite trail item from the favorite trail array
		return (
			<div className="display">
				<h3 className="sub-header">FAVORITE TRAILS</h3>
				{favoriteList}
			</div>	
		)
	}
});


var mapStateToProps = function(state, props) {
	return {
		userId: state.googleID,
		favorites: state.favorites
	} 
}

var Container = connect(mapStateToProps)(TrailFavorites);

module.exports = Container;

