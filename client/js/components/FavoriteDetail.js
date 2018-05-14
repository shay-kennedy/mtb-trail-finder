import React, { Component } from 'react'
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { TrailsMain } from '../components'
import Confirm from 'react-confirm-bootstrap'

export class FavoriteDetail extends Component {
  constructor(props) {
    super(props)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
  }
  removeFromFavorites() {
		this.props.dispatch(actions.removeFavorite(this.props))
	}
	render() {
    var description = this.props.description;
    description = description.split('&lt;b&gt;').join(' ');
    description = description.split('&lt;/b&gt;').join(' ');
    description = description.split('&lt;p&gt;').join(' ');
    description = description.split('&lt;/p&gt;').join(' ');
    description = description.split('&lt;u&gt;').join(' ');
    description = description.split('&lt;/u&gt;').join(' ');
    description = description.split('&lt;li&gt;').join(' ');
    description = description.split('&lt;/li&gt;').join(' ');
    description = description.split('&lt;ul&gt;').join(' ');
    description = description.split('&lt;/ul&gt;').join(' ');
    description = description.split('&lt;br/&gt;').join(' ');
    description = description.split('&lt;br /&gt;').join(' ');
    description = description.split('<br />').join(' ');
    description = description.split('&quot;').join('"');
    description = description.split('&amp;').join('&');
    var directions = this.props.directions;
    directions = directions.split('&lt;b&gt;').join(' ');
    directions = directions.split('&lt;/b&gt;').join(' ');
    directions = directions.split('&lt;p&gt;').join(' ');
    directions = directions.split('&lt;/p&gt;').join(' ');
    directions = directions.split('&lt;u&gt;').join(' ');
    directions = directions.split('&lt;/u&gt;').join(' ');
    directions = directions.split('&lt;li&gt;').join(' ');
    directions = directions.split('&lt;/li&gt;').join(' ');
    directions = directions.split('&lt;ul&gt;').join(' ');
    directions = directions.split('&lt;/ul&gt;').join(' ');
    directions = directions.split('&lt;br/&gt;').join(' ');
    directions = directions.split('&lt;br /&gt;').join(' ');
    directions = directions.split('<br />').join(' ');
    directions = directions.split('&quot;').join('"');
    directions = directions.split('&amp;').join('&');
    return (
      <div className="rounded trails">
        <h3 className="trail-title"><a href={this.props.url} target="_blank"> {this.props.name} </a></h3>
        <p><strong>Location:</strong> {this.props.city}, {this.props.state}</p>
        <p><strong>Track Length:</strong> {this.props.length} miles</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Directions:</strong> {directions}</p>
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


function mapStateToProps(state, props) {
  return {
    userId: state.googleID,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(FavoriteDetail)
