import React, { Component } from 'react'
import { searchTrending } from './utils'
import './css/Trending.css'

export default class Trending extends Component {
    render() {
        return (
			<div id='trending'>
				<h1>Trending Right Now</h1>
				<div id='gallery'>{searchTrending()}</div>
			</div>
		)
    }
}
