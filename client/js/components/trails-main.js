var React = require("react");
var Input = require('./input');
var router = require('react-router');
var Link = router.Link;


var TrailsMain = React.createClass({
	// Contains search bar, favorite button and logout button
	render: function(props) {
		return (
			<div className="container trails-page">
				<div className="row title-bar">					
					<h1 className="page-title"><Link to={'/trails'} >MTB Trail Finder</Link></h1>	
				</div>
				<div className="inputs">					
					<div className="input-field">
						<Input />
					</div>
					<div className="favorites-button">
						<Link to={'/trails/favorites'}><input type='button' value='Favorites' className='input-button btn btn-success' /></Link>
					</div>
				</div>
				<div className="display">
					{this.props.children}
				</div>
				<div className="logout">
					<a href='/logout' ><input type='button' value='Logout' className='input-button btn btn-warning' /></a>
				</div>	
			</div>
		)
	}
});


module.exports = TrailsMain;
