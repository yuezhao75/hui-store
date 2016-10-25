'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './src/components/header/index'
import Home from './src/containers/home/index'
import GoodList from './src/containers/goodList/index'
import createStore from './src/store/configureStore'
import reducers from './src/reducers/';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Header}>
                <IndexRoute component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/goodList" component={GoodList}/>
                <Route path="*" component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
)