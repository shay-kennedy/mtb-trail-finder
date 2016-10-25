var React = require("react");
var actions = require('../redux/actions');
var connect = require('react-redux').connect;
var TrailsMain = require('./trails-main');



var FavoriteDetail = React.createClass ({			
	// Dispatches action to remove trail from favorites when you click the 'Remove from Favorites' button
	removeFromFavorites: function() {
		var contin = confirm('Are you sure you would like to remove this favorite?');
		if (contin === true) {
			console.log('ITEM REMOVED');
			this.props.dispatch(actions.removeFavorite(this.props));
			this.props.dispatch(actions.fetchUser());
		} else {
			return;
		}
	},
	render: function() {
		// Cleans up the API description and directions fields
		var description = this.props.description;		
		description = description.split('&lt;b&gt;').join(' ');
		description = description.split('&lt;/b&gt;').join(' ');		
		description = description.split('&lt;p&gt;').join(' ');
		description = description.split('&lt;/p&gt;').join(' ');
		description = description.split('&lt;u&gt;').join(' ');
		description = description.split('&lt;/u&gt;').join(' ');
		description = description.split('&lt;li&gt;').join(' ');
		description = description.split('&lt;/li&gt;').join(' ');
		description = description.split('&lt;ul&gt;').join(' ');
		description = description.split('&lt;/ul&gt;').join(' ');
		description = description.split('&lt;br/&gt;').join(' ');		
		description = description.split('&lt;br /&gt;').join(' ');
		description = description.split('<br />').join(' ');
		description = description.split('&quot;').join('"');
		description = description.split('&amp;').join('&');
		var directions = this.props.directions;
		directions = directions.split('&lt;b&gt;').join(' ');
		directions = directions.split('&lt;/b&gt;').join(' ');		
		directions = directions.split('&lt;p&gt;').join(' ');
		directions = directions.split('&lt;/p&gt;').join(' ');
		directions = directions.split('&lt;u&gt;').join(' ');
		directions = directions.split('&lt;/u&gt;').join(' ');
		directions = directions.split('&lt;li&gt;').join(' ');
		directions = directions.split('&lt;/li&gt;').join(' ');
		directions = directions.split('&lt;ul&gt;').join(' ');
		directions = directions.split('&lt;/ul&gt;').join(' ');
		directions = directions.split('&lt;br/&gt;').join(' ');		
		directions = directions.split('&lt;br /&gt;').join(' ');
		directions = directions.split('<br />').join(' ');
		directions = directions.split('&quot;').join('"');
		directions = directions.split('&amp;').join('&');
		// Returns info for each items in the favorite trail list
		return (
			<div className="container rounded trails">
				<div className="trail-top row">
					<div className="col-xs">
						<h3 className="trail-title"><a href={this.props.url} target="_blank"> {this.props.name} </a></h3>
					</div>
					<div className="col-xs">
						<button onClick={this.removeFromFavorites} className="btn btn-outline-danger btn-sm" >Remove from Favorites</button>
					</div>
				</div>
				<p><strong>Location:</strong> {this.props.city}, {this.props.state}</p>
				<p><strong>Track Length:</strong> {this.props.length} miles</p>				
				<p><strong>Description:</strong> {description}</p>
				<p><strong>Directions:</strong> {directions}</p>		
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

var Container = connect(mapStateToProps)(FavoriteDetail);

module.exports = Container;

