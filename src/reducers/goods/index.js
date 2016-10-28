'use strict';

import * as actions from '../../actions/goodList';
//对页面prop 数据进行管理
const initialState = {
    goods:[]
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {
        case actions.GET_GOODS_FAILED:
            return Object.assign({}, state, {
                goods: action.data
            });

        case actions.GET_GOODS_SUCCESS:
            return Object.assign({}, state, {
                goods: action.data
            });
        default:
            return state;
    }
}