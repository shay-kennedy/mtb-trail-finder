import React, { Component } from 'react'
import { connect } from 'react-redux'
import Confirm from 'react-confirm-bootstrap'
import { removeFavorite } from '../redux/user'
import formatContent from '../helpers/formatContent'

export class FavoriteDetail extends Component {
  constructor(props) {
    super(props)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
  }
  removeFromFavorites() {
		this.props.removeFavorite(this.props)
	}
	render() {
    const {
      url,
      name,
      city,
      state,
      length,
      description,
      directions,
    } = this.props
    return (
      <div className="rounded trails">
        <h3 className="trail-title"><a href={url} target="_blank"> {name} </a></h3>
        <p><strong>Location:</strong> {city}, {state}</p>
        <p><strong>Track Length:</strong> {length} miles</p>
        <p><strong>Description:</strong> {formatContent(description)}</p>
        <p><strong>Directions:</strong> {formatContent(directions)}</p>
        <Confirm
          onConfirm={this.removeFromFavorites}
          body="Are you sure you want to remove this trail from your favorites?"
          confirmText="Confirm Remove"
          title="Remove from Favorites">
          <button className="btn btn-outline-danger btn-sm" >Remove from Favorites</button>
        </Confirm>
      </div>
    )
	}
}


function mapStateToProps({ user }) {
  return {
    userId: user.googleID,
    favorites: user.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFavorite: (props) => { dispatch(removeFavorite(props)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDetail)
