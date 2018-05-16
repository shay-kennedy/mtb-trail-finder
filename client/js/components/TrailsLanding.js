import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


export class TrailsLanding extends Component {
	render() {
		return (
			<div className="trails-page">
				<div className="inputs">					
					<div className="landing-container">
						<div className="landing-text">
							<p>Welcome!</p>
							<p>Use the search above to find new trails.</p>
							<p>Or if you're planning a trip, scout out the area ahead of time.</p>
						</div>
            {this.props.userId 
              ? <Link to={'/trails/favorites'}><input type='button' value='Your Favorites' className='input-button btn btn-success landing-favorite' /></Link>
              : <a href="/auth/google">Login for Favorites</a>
            }
					</div>
				</div>
			</div>
    )
  }
}


function mapStateToProps({ user }) {
	return {
		userId: user.googleID,
	}
}

export default connect(mapStateToProps)(TrailsLanding)
