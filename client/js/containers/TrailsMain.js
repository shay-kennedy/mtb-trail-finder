import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cookies from 'js-cookie'
import { fetchAndHandleUser, logout } from '../redux/user'
import { TrailLocationForm } from '../forms'


export class TrailsMain extends Component {
  componentDidMount() {
    const token = Cookies.get('accessToken')
    if (token) {
      this.props.fetchUser()
    }
  }
  render() {
    const { children, userId, logoutUser } = this.props
    return (
      <div>
        <div className="container trails-page">
          <div className="row trail-title">
            <h1 className="page-title"><Link to={'/trails'} >MTB Trail Finder</Link></h1>
          </div>
          <div className="inputs">
            <div className="input-field">
              <TrailLocationForm />
            </div>
          </div>
          <div className="display">
            {children}
          </div>
        </div>
        {userId && <div className="logout">
          <button onClick={() => logoutUser()} className='input-button btn btn-warning'>Logout</button>
        </div>}
      </div>
    )
  }
}


function mapStateToProps({ user }) {
	return {
		userId: user.googleID,
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
    logoutUser: () => { dispatch(logout()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailsMain)
