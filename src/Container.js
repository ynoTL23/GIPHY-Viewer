import React, { Component } from 'react'
import './css/Container.css'

export class Container extends Component {
    render() {
        return (
			<div id='container'>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
                <iframe src="https://giphy.com/embed/3o7bufkPz3LRof205G" frameborder="0"></iframe>
            </div>
		)
    }
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
