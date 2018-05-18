import React from 'react'
import { Link } from 'react-router'
import Cookies from 'js-cookie'


const renderFavoritesButton = () => {
	return (
		<Link to={'/trails/favorites'}>
			<input type='button'
						 value='Your Favorites'
						 className='input-button btn btn-success landing-favorite' />
		</Link>
	)
}

export default function TrailsLanding() {
	const token = Cookies.get('accessToken')
	return (
		<div className="trails-page">
			<div className="inputs">					
				<div className="landing-container">
					<div className="landing-text">
						<p>Welcome!</p>
						<p>Use the search above to find mountain biking trails near you.</p>
						<p>Or if you're planning a trip, scout out the area ahead of time.</p>
					</div>
					{token 
						? renderFavoritesButton()
						: <a href="/auth/google" target="_self">Login for Favorites</a>
					}
				</div>
			</div>
		</div>
	)
}
