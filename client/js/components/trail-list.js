var React = require("react");
var connect = require('react-redux').connect;
var actions = require('../redux/actions');
var Input = require('./input');
var TrailDetail = require('./trail-detail');
var Link = require('react-router').Link;


var TrailList = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(actions.fetchUser());
	},
	render: function(props) {
		// Maps through array of search results passing in props to TrailDetail componenet
		var trailList = this.props.trails.map(function(trail) {
			return (
				<TrailDetail 
					key={trail.unique_id}
					trail_id={trail.unique_id}
					city={trail.city} 
					state={trail.state} 
					name={trail.name}
					url={trail.activities[0].url} 
					length={trail.activities[0].length}
					description={trail.activities[0].description}
					directions={trail.directions}
				/>
			)
		});
		// Returns each trail item from the search trail array
		return (
			<div className="display">
				<div className="favorites-button">
					<Link to={'/trails/favorites'}><input type='button' value='Favorites' className='input-button btn btn-success' /></Link>
				</div>
				<h3 className="sub-header">TRAIL LIST</h3>
				{trailList}
			</div>	
		)
	}
});


var mapStateToProps = function(state, props) {
	return {
		trails: state.trails,
		userId: state.googleID,
		favorites: state.favorites
	} 
}

var Container = connect(mapStateToProps)(TrailList);

module.exports = Container;

