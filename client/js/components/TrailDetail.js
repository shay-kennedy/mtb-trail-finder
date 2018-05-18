import React, { Component } from 'react'
import { connect } from 'react-redux'
import Confirm from 'react-confirm-bootstrap'
import { addFavorite, removeFavorite } from '../redux/user'
import formatContent from '../helpers/formatContent'


const renderConfirm = (props) => {
  if (props.favoritesList) {
    return (
      <Confirm
        onConfirm={() => props.removeFavorite(props)}
        body="Are you sure you want to remove this trail from your favorites?"
        confirmText="Confirm Remove"
        title="Remove from Favorites">
        <button className="btn btn-outline-danger btn-sm" >Remove from Favorites</button>
      </Confirm>
    )
  } else {
    return (
      <Confirm
        onConfirm={() => props.addFavorite(props)}
        body="Are you sure you want to add this trail to your favorites?"
        confirmText="Confirm Add"
        confirmBSStyle="success"
        title="Add to Favorites">
        <button className="btn btn-outline-success btn-sm">Add to Favorites</button>
      </Confirm>
    )
  }
}

export class TrailDetail extends Component {
  render() {
    const { 
      url,
      name,
      city,
      state,
      length,
      description,
      directions,
      userId,
      addFavorite,
      removeFavorite,
      favoritesList,
    } = this.props
    return (
      <div className="container rounded trails">
        <h3 className="trail-title"><a href={url} target="_blank"> {name} </a></h3>
        <p><strong>Location:</strong> {city}, {state}</p>
        <p><strong>Track Length:</strong> {length} miles</p>
        <p><strong>Description:</strong> {formatContent(description)}</p>
        <p><strong>Directions:</strong> {formatContent(directions)}</p>
        {userId && renderConfirm(this.props)}
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
    addFavorite: (props) => { dispatch(addFavorite(props)) },
    removeFavorite: (props) => { dispatch(removeFavorite(props)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailDetail)
