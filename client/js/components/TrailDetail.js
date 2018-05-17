import React, { Component } from 'react'
import { connect } from 'react-redux'
import Confirm from 'react-confirm-bootstrap'
import { TrailsMain } from '../components'
import { addFavorite } from '../redux/user'
import formatContent from '../helpers/formatContent'


export class TrailDetail extends Component {
  constructor(props) {
    super(props)
    this.addToFavorites = this.addToFavorites.bind(this)
  }
  addToFavorites() {
    this.props.addFavorite(this.props)
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
      userId,
    } = this.props
    return (
      <div className="container rounded trails">
        <h3 className="trail-title"><a href={url} target="_blank"> {name} </a></h3>
        <p><strong>Location:</strong> {city}, {state}</p>
        <p><strong>Track Length:</strong> {length} miles</p>
        <p><strong>Description:</strong> {formatContent(description)}</p>
        <p><strong>Directions:</strong> {formatContent(directions)}</p>
        {userId && <Confirm
          onConfirm={this.addToFavorites}
          body="Are you sure you want to add this trail to your favorites?"
          confirmText="Confirm Add"
          confirmBSStyle="success"
          title="Add to Favorites">
          <button className="btn btn-outline-success btn-sm">Add to Favorites</button>
        </Confirm>}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailDetail)
