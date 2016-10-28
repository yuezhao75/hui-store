'use strict';

'use strict';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Header from './src/components/header/index'
import Home from './src/containers/home/index'
import GoodList from './src/containers/goodList/index'
import { syncHistoryWithStore } from 'react-router-redux';

export default (store) => {

    //创建一个与store事件同步的history对象
    const history = syncHistoryWithStore(hashHistory, store);

    return (
        <Router history={history}>
            <Route path="/" component={Header}>
                <IndexRoute component={Home}/>
                <Route path="index" component={Home}/>
                <Route path='goodList' component={GoodList}/>
                <Route path="*" component={Home}/>
            </Route>
        </Router>
    )
};
