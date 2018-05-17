import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dialog from 'react-bootstrap-dialog'
Dialog.setOptions({primaryClassName: 'btn-success'})
import { fetchAndHandleTrails } from '../redux/trails'

// TODO: Make this a functional component

export class Input extends Component {
  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
  }
  onSearch(e) {
    event.preventDefault()
    var state = this.refs.state.value
    var city = this.refs.city.value
    if (city == '' || state == '') {
      this.refs.dialog.showAlert('Please enter a city and state.')
      return
    }
    this.props.fetchTrails(city, state)
    this.refs.city.value = ''
    this.refs.state.value = ''	
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Enter City" ref="city" />
        </div>
        <div className="form-group select">
          <select className="form-control" id="dropdown" ref="state">
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
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrails: (city, state) => { dispatch(fetchAndHandleTrails(city, state)) },
  }
}

export default connect(null, mapDispatchToProps)(Input)
