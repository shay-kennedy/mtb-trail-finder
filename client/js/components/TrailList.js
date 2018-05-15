import React, { Component } from 'react'
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Input, TrailDetail } from '../components'


export class TrailList extends Component {
  render() {
    console.log('props', this.props)
    var trailList = this.props.trails.map(function (trail) {
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
    });
    return (
      <div className="display">
        <div className="favorites-button">
          {this.props.userId && <Link to={'/trails/favorites'}><input type='button' value='Favorites' className='input-button btn btn-success' /></Link>}
        </div>
        <h3 className="sub-header">TRAIL LIST</h3>
        {trailList}
      </div>
    )
  }
}


function mapStateToProps({reducer}) {
  return {
    trails: reducer.trails,
    userId: reducer.googleID,
    favorites: reducer.favorites
  }
}

export default connect(mapStateToProps)(TrailList)
