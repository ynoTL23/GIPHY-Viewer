import React, { Component } from 'react';
import { customSearch, randomSearch } from './utils';
import './css/Search.css'

export default class Search extends Component {
	render() {
		const searchQuery = document.getElementById('search-box').value

		// if search field is empty, return a random gif
		if (searchQuery === '') {
			return (
				<div id='results'>
					<div id='gallery'>{randomSearch()}</div>
				</div>
			)
		} else {
			// search for the gif
			return (
				<div id='results'>
					<h1>Results for '{searchQuery}'</h1>
					<div id='gallery'>{customSearch(searchQuery)}</div>
				</div>
			)
		}
	}
}
