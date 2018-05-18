import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Loader from 'react-loader-spinner'
import { TrailDetail } from '../components'


const renderTrails = (trails) => {
  if (trails.length === 0) {
    return (
      <div className="rounded no-results">
        No trails were found. Please try a new search.
      </div>
    )
  } else {
    return (
      trails.map(trail => {
        return (
          <TrailDetail
            key={trail.unique_id}
            trail_id={trail.unique_id}
            city={trail.city}
            state={trail.state}
            name={trail.name}
            url={trail.activities[0].url}
            length={trail.activities[0].length}
            description={trail.activities[0].description}
            directions={trail.directions}
          />
        )
      })
    )
  }
}

const renderLoader = () => {
  return (
    <div className="loader">
      <Loader type="Puff" color="#5cb85c" />
    </div>
  )
}

export class TrailList extends Component {
  render() {
    const { trails, isFetching, userId } = this.props
    return (
      <div className="display">
        <div className="favorites-button">
          {userId && 
            <Link to={'/trails/favorites'}>
              <input type='button' value='Favorites' className='input-button btn btn-success' />
            </Link>
          }
        </div>
        <h3 className="sub-header">** TRAIL LIST **</h3>
        {isFetching
          ? renderLoader()
          : renderTrails(trails)
        }
      </div>
    )
  }
}


function mapStateToProps({ user, trails }) {
  return {
    trails: trails.trails,
    isFetching: trails.isFetching,
    userId: user.googleID,
  }
}

export default connect(mapStateToProps)(TrailList)
