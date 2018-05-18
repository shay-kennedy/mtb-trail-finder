import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FavoriteDetail, TrailDetail } from '../components'


export class TrailFavorites extends Component {
  render() {
    const favoriteList = this.props.favorites.map(favorite => {
      return (
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
      )
    })
    return (
      <div className="display">
        <h3 className="sub-header">** FAVORITE TRAILS **</h3>
        {favoriteList}
      </div>
    )
  }
}


function mapStateToProps({ user }) {
  return {
    favorites: user.favorites,
  }
}

export default connect(mapStateToProps)(TrailFavorites)
