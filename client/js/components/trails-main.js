var React = require("react");
var Input = require('./input');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var actions = require('../redux/actions');
var Cookies = require("js-cookie");


var TrailsMain = React.createClass({
	// Contains search bar, favorite button and logout button
	componentDidMount: function () {
		var token = Cookies.get('accessToken');
		if (token) {
			this.props.dispatch(actions.fetchUser());
		}
	},
	handleLogout: function () {
		this.props.dispatch(actions.logoutUser())
	},
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
				{this.props.userId && <div className="logout">
					<button onClick={this.handleLogout} className='input-button btn btn-warning'>Logout</button>
				</div>}	
			</div>
		)
	}
});


var mapStateToProps = function (state, props) {
	return {
		userId: state.googleID,
	}
}

var TrailsMain = connect(mapStateToProps)(TrailsMain);

module.exports = TrailsMain;