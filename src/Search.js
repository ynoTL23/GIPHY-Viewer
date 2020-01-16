import React, { Component } from 'react';
import { customSearch } from './utils';
import './css/Search.css'

export default class Search extends Component {
    render() {
        const searchQuery = document.getElementById('search-box').value
        return (
			<div id='results'>
				<h1>Results for '{searchQuery}'</h1>
				<div id='gallery'>{customSearch(searchQuery)}</div>
			</div>
		)
    }
}
