import React from 'react'

import { render } from 'react-dom'

import css from './styles/style.styl'

import Main from './components/main'
import Single from './components/single'
import PhotoGrid from './components/photogrid'

import { Router, Route, IndexRoute, browserHisory } from 'react-router'

const router = (
	<Router history={browserHisory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)

render(
	router, 
	document.getElementById('root'))
