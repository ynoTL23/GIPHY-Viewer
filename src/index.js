import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Home from './Home'
import Search from './Search'
import Trending from './Trending'
import PageNotFound from './PageNotFound'

import './css/index.css'

const navigation = (
	<Router>
		<div id='header'>
            <Link to='/' id='home'>Home</Link>
            <input type="search" name="search-box" id="search-box" placeholder="Search" />
            <nav>
                <Link to='/search'>Search</Link>
                <Link to='/trending'>Trending</Link>
            </nav>
		</div>

		<div id='content'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/search' component={Search} />
				<Route path='/trending' component={Trending} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(navigation, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
