import React, { Component } from 'react'
import './css/ErrorContainer.css'

// container for a single gif
export const GifContainer = (imageUrl) => {
    return (
        <iframe src={imageUrl} frameBorder="0" width='400' height='270'></iframe>
    )
}

// error handling
export class ErrorContainer extends Component {
    render() {
        return (
			<div id='error'>
				<h1>{this.props.err}</h1>
			</div>
		)
    }
}
