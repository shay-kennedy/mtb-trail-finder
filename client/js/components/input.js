var React = require("react");
var connect = require('react-redux').connect;
var actions = require('../redux/actions');
var router = require('react-router');
var Link = router.Link;
var Dialog = require('react-bootstrap-dialog');
Dialog.setOptions({primaryClassName: 'btn-success'});
	
var Input = React.createClass({
	// Dispatches the request to retreive trails upon clicking 'Search' button
	onSearch: function(event){
		event.preventDefault();
		var state = this.refs.state.value;
		var city = this.refs.city.value;
		if (state == '') {
			this.refs.dialog.showAlert('Please enter a city and state.');
			return;
		} 
		this.props.dispatch(actions.getTrails(city, state));
		this.refs.city.value = '';
		this.refs.state.value = '';	
	},
	render: function(){
	return (
		<form className="form-inline">
		  <div className="form-group">
		    <input type="text" className="form-control" placeholder="Enter City" ref="city" />
		  </div>
		  <div className="form-group select">
		    <select  className="form-control" id="dropdown" ref="state">
	      	<option value="">Select State</option>
	      	<option value="Alabama">Alabama</option>
					<option value="Alaska">Alaska</option>
					<option value="Arizona">Arizona</option>
					<option value="Arkansas">Arkansas</option>
					<option value="California">California</option>
					<option value="Colorado">Colorado</option>
					<option value="Connecticut">Connecticut</option>
					<option value="Delaware">Delaware</option>
					<option value="Florida">Florida</option>
					<option value="Georgia">Georgia</option>
					<option value="Hawaii">Hawaii</option>
					<option value="Idaho">Idaho</option>
					<option value="Illinois">Illinois</option>
					<option value="Indiana">Indiana</option>
					<option value="Iowa">Iowa</option>
					<option value="Kansas">Kansas</option>
					<option value="Kentucky">Kentucky</option>
					<option value="Louisiana">Louisiana</option>
					<option value="Maine">Maine</option>
					<option value="Maryland">Maryland</option>
					<option value="Massachusetts">Massachusetts</option>
					<option value="Michigan">Michigan</option>
					<option value="Minnesota">Minnesota</option>
					<option value="Mississippi">Mississippi</option>
					<option value="Missouri">Missouri</option>
					<option value="Montana">Montana</option>
					<option value="Nebraska">Nebraska</option>
					<option value="Nevada">Nevada</option>
					<option value="New Hampshire">New Hampshire</option>
					<option value="New Jersey">New Jersey</option>
					<option value="New Mexico">New Mexico</option>
					<option value="New York">New York</option>
					<option value="North Carolina">North Carolina</option>
					<option value="North Dakota">North Dakota</option>
					<option value="Ohio">Ohio</option>
					<option value="Oklahoma">Oklahoma</option>
					<option value="Oregon">Oregon</option>
					<option value="Pennsylvania">Pennsylvania</option>
					<option value="Rhode Island">Rhode Island</option>
					<option value="South Carolina">South Carolina</option>
					<option value="South Dakota">South Dakota</option>
					<option value="Tennessee">Tennessee</option>
					<option value="Texas">Texas</option>
					<option value="Utah">Utah</option>
					<option value="Vermont">Vermont</option>
					<option value="Virginia">Virginia</option>
					<option value="Washington">Washington</option>
					<option value="West Virginia">West Virginia</option>
					<option value="Wisconsin">Wisconsin</option>
					<option value="Wyoming">Wyoming</option>
	      </select>
		  </div>
		  <span className="search-button">
        <button onClick={this.onSearch} className="btn btn-success btn-secondary" type="submit" >
					<Link to={'/trails/list'} className="search" >Search</Link>
				  <Dialog ref="dialog" />
				</button>
      </span>  
		</form>
	);
}});


var Container = connect()(Input);

module.exports = Container;

// <div className="row input">
//   <div>
//     <div className="input-group">
//       <input type="text" className="form-control" placeholder="Enter City, State" ref="location" />
//       <select id="dropdown" ref="state">
//       	<option value="">Select State</option>
//       	<option value="Arizona">AZ</option>
//       	<option value="Ohio">OH</option>
//       </select>
//       <span className="input-group-btn">
//         <button onClick={this.onSearch} className="btn btn-success btn-secondary" type="button" >
// 					<Link to={'/trails/list'} className="search" >Search</Link>
//				 <Dialog ref="dialog" />
// 				</button>
//       </span>
//     </div>
//   </div>
// </div>

