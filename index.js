'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import createRoute from './routes';
import createStore from './src/store/configureStore'
import reducers from './src/reducers/';

import './node_modules/antd/dist/antd.less';

const store = createStore(reducers);

render(
    <Provider store={store}>
        {createRoute(store)}
    </Provider>,
    document.getElementById('container')
)