import React, { Component } from 'react'

export const GifContainer = (imageUrl) => {
    return (
        <iframe src={imageUrl} frameborder="0" width='400' height='270'></iframe>
    )
}

export class ErrorContainer extends Component {
    render() {
        return (
			<div id='error'>
				<h1>{this.props.error}</h1>
			</div>
		)
    }
}
