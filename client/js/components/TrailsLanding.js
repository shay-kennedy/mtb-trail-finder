import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


const renderFavoritesButton = () => {
	return (
		<Link to={'/trails/favorites'}>
      <input
        type='button'
				value='Your Favorites'
				className='input-button btn btn-success landing-favorite'
      />
		</Link>
	)
}

const TrailsLanding = (props) => {
  if (props.isFetching) {
    return null
  }
  return (
		<div className="trails-page">
			<div className="inputs">
				<div className="landing-container">
					<div className="landing-text">
						<p>Welcome!</p>
						<p>Use the search above to find mountain biking trails near you.</p>
						<p>Or if you're planning a trip, scout out the area ahead of time.</p>
					</div>
          {props.userId
						? renderFavoritesButton()
						: <a href="/auth/google" target="_self">Login for Favorites</a>
					}
				</div>
			</div>
		</div>
	)
}


const mapStateToProps = ({ user }) => {
  return {
    userId: user.googleID,
    isFetching: user.isFetching,
  }
}

export default connect(mapStateToProps)(TrailsLanding)
