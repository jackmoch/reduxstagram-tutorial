'use strict';

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-reducer'

import posts from './posts'
import comments from './comments'

const routeReducer = combineReducers({posts, comments, router: routerReducer})

export default routeReducer