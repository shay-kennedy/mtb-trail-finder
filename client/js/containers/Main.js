import React, { Component } from 'react'

// TODO: Make this a functional component



export default class Main extends Component {
	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		)
	}
}
