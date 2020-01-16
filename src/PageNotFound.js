import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Home from './Home'

import './css/PageNotFound.css'

export default class PageNotFound extends Component {
    render() {
        return (
			<div id='error'>
				<div id='error-msg'>
					<h1>404</h1>
					<p>Sorry, we couldn't find anything :&#40;</p>
				</div>
				<div id='home-button'>
					<Link to='/'>Go Home</Link>
					<Route exact path='/' component={Home} />
				</div>
			</div>
		)
    }
}
