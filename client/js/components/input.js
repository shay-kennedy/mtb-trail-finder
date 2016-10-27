var React = require("react");
var connect = require('react-redux').connect;
var actions = require('../redux/actions');
var router = require('react-router');
var Link = router.Link;

	
var Input = React.createClass({
	// Dispatches the request to retreive trails upon clicking 'Search' button
	onSearch: function(event){
		event.preventDefault();
		var location = this.refs.location.value;
		if (location == '') {
			alert('Please enter a location.');
			return;
		};	
		this.props.dispatch(actions.getTrails(location));
		this.refs.location.value = '';	
	},
	render: function(){
	return (
		<div className="row input">
		  <div>
		    <div className="input-group">
		      <input type="text" className="form-control" placeholder="Enter City, State" ref="location" />
		      <span className="input-group-btn">
		        <button onClick={this.onSearch} className="btn btn-success btn-secondary" type="button" >
							<Link to={'/trails/list'} className="search" >Search</Link>
						</button>
		      </span>
		    </div>
		  </div>
		</div>
	);
}});


var Container = connect()(Input);

module.exports = Container;
