var React = require("react");
var Input = require('./input');
var Link = require('react-router').Link;


var TrailsLanding = React.createClass({
	// Contains search bar, favorite button and logout button
	render: function(props) {
		return (
			<div className="trails-page">
				<div className="inputs">					
					<div className="landing-container">
						<div className="landing-text">
							<p>Welcome!</p>
							<p>Use the inputs above to search for trails.</p>
							<p>Or if you're planning a trip, scout out the area ahead of time.</p>
						</div>
						<Link to={'/trails/favorites'}><input type='button' value='Click For Favorites' className='input-button btn btn-success landing-favorite' /></Link>
					</div>
				</div>
			</div>
		)
	}
});


module.exports = TrailsLanding;
