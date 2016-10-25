var React = require("react");
var actions = require('../redux/actions');
var connect = require('react-redux').connect;


var Login = React.createClass({
	// Dispatches request for user upon clicking 'Login' button
	fetchUser: function(e) {
		e.preventDefault();
		this.props.dispatch(actions.fetchUser());
	},
	render: function() {
		return (
			<div className="login-page">
				<h1>MTB Trail Finder</h1>
				<form onSubmit={this.fetchUser}>
					<a href="/auth/google"><input type='button' value='Login' className='input-button btn btn-success login-button' /></a>
					<p>Please login with your Google credentials so that we can provide you with a better experience!</p>
				</form>
			</div>
		)
	}
});


var Container = connect()(Login);

module.exports = Container;