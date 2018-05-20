import React from 'react'
import { connect } from 'react-redux'
import { FavoriteDetail, TrailDetail } from '../components'


const renderTrailDetail = (favorites) => {
  return favorites.map(favorite => (
    <TrailDetail
      key={favorite.trail_id}
      trail_id={favorite.trail_id}
      city={favorite.city}
      state={favorite.state}
      name={favorite.name}
      url={favorite.url}
      length={favorite.length}
      description={favorite.description}
      directions={favorite.directions}
      favoritesList={true}
    />
  ))
}

const TrailFavorites = (props) => {
  return (
    <div className="display">
      <h3 className="sub-header">** FAVORITE TRAILS **</h3>
      {renderTrailDetail(props.favorites)}
    </div>
  )
}


const mapStateToProps = ({ user }) => {
  return {
    favorites: user.favorites,
  }
}

export default connect(mapStateToProps)(TrailFavorites)
