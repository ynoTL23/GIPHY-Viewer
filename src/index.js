import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Main() {
    return (
		<div>
			<div id='header'>
				<h1 id='home'>Home</h1>
				<nav>
					<ul>
						<input type='search' name='search-box' id='search-box' placeholder='Search' />
						<li>Search</li>
						<li>Trending</li>
					</ul>
				</nav>
			</div>
			<div id='content'></div>
		</div>
	)
}

ReactDOM.render(Main(), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
