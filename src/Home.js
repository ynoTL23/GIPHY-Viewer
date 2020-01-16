import React, { Component } from 'react';
import './css/Home.css'

export default class Home extends Component {
    render () {
        return (
			<div id='welcome'>
				<h1>Welcome to the GIPHY Search App!</h1>
				<p>
					Use the search box above to find some GIFs or see
					what others around the world like by visiting the 'Trending'
					tab.
				</p>
			</div>
		)
    }
}
