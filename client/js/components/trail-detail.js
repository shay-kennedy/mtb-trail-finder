var React = require("react");
var actions = require('../redux/actions');
var connect = require('react-redux').connect;
var TrailsMain = require('./trails-main');
var Confirm = require('react-confirm-bootstrap');


var TrailDetail = React.createClass ({			
	// Dispatches action to add trail to favorites when you click the 'Add to Favorites' button
	addToFavorites: function() {
			this.props.dispatch(actions.addFavorite(this.props));	
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
		// Returns info for each items in the trail search
		return (
			<div className="container rounded trails">
				<h3 className="trail-title"><a href={this.props.url} target="_blank"> {this.props.name} </a></h3>
				<p><strong>Location:</strong> {this.props.city}, {this.props.state}</p>
				<p><strong>Track Length:</strong> {this.props.length} miles</p>				
				<p><strong>Description:</strong> {description}</p>
				<p><strong>Directions:</strong> {directions}</p>
				<Confirm 
						onConfirm={this.addToFavorites} 
						body="Are you sure you want to add this trail to your favorites?"
						confirmText="Confirm Add"
						confirmBSStyle="success"
						title="Add to Favorites">
					<button className="btn btn-outline-success btn-sm">Add to Favorites</button>
				</Confirm>
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

var Container = connect(mapStateToProps)(TrailDetail);

module.exports = Container;

