var React = require('react');
var ReactDOM = require('react-dom');


// Contains all children components used for routes
var Main = function(props) {
	return (		
		<div className="container">
			{props.children}
		</div>
	)
}


module.exports = Main;