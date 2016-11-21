var React = require("react");
var Input = require('./input');
var Link = require('react-router').Link;


var TrailsMain = React.createClass({
	// Contains search bar, favorite button and logout button
	render: function(props) {
		return (
			<div>
				<div className="container trails-page">
					<div className="row trail-title">					
						<h1 className="page-title"><Link to={'/trails'} >MTB Trail Finder</Link></h1>	
					</div>
					<div className="inputs">					
						<div className="input-field">
							<Input />
						</div>
					</div>
					<div className="display">
						{this.props.children}
					</div>
				</div>
				<div className="logout">
					<a href='/logout' ><input type='button' value='Logout' className='input-button btn btn-warning' /></a>
				</div>	
			</div>
		)
	}
});


module.exports = TrailsMain;
