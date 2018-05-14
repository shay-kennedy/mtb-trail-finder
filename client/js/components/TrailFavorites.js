import React, { Component } from 'react'
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { Input, FavoriteDetail } from '../components'


export class TrailFavorites extends Component {
  render() {
    var favoriteList = this.props.favorites.map(function (favorite) {
      return (
        <FavoriteDetail
          key={favorite.trail_id}
          trail_id={favorite.trail_id}
          city={favorite.city}
          state={favorite.state}
          name={favorite.name}
          url={favorite.url}
          length={favorite.length}
          description={favorite.description}
          directions={favorite.directions}
        />
      )
    });
    return (
      <div className="display">
        <h3 className="sub-header">FAVORITE TRAILS</h3>
        {favoriteList}
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return {
    userId: state.googleID,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(TrailFavorites)
