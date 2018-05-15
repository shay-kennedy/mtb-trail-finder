import React, { Component } from 'react'
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cookies from 'js-cookie'
import { Input } from '../components'


export class TrailsMain extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount() {
    var token = Cookies.get('accessToken');
    if (token) {
      this.props.dispatch(actions.fetchUser());
    }
  }
  handleLogout() {
    this.props.dispatch(actions.logoutUser())
  }
  render() {
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
}


function mapStateToProps({reducer}) {
	return {
		userId: reducer.googleID,
	}
}

export default connect(mapStateToProps)(TrailsMain);
