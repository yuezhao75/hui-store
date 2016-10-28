'use strict';

import { combineReducers } from 'redux'
import home from './home/'
import goods from './goods/'

import { routerReducer } from 'react-router-redux';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    home,
    goods,
    routing: routerReducer
})

export default rootReducer;