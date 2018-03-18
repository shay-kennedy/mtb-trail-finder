var React = require("react")
var actions = require('../redux/actions')
var connect = require('react-redux').connect
var Link = require('react-router').Link


var Login = React.createClass({
	// Dispatches request for user upon clicking 'Login' button
	render: function() {
		return (
			<div className="login-page">
				<h1>MTB Trail Finder</h1>
				<p>Mountain biking trails near you!</p>
				<a href="/auth/google"><input type='button' value='Login' className='input-button btn btn-success login-button' /></a>
        <div>
          <Link to="/trails">Continue As Guest</Link>
        </div>
			</div>
		)
	}
})


var Container = connect()(Login)

module.exports = Container
