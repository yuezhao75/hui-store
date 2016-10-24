'use strict';
//import {GET_DATA, UPDATE_DATA} from '../../actions/home';
import * as actions from '../../actions/home';
//对页面prop 数据进行管理
const initialState = {
    logo: [],
    goods:[],
    bg:[]
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {
        case actions.GET_HOME_FAILED:
            return Object.assign({}, state, {
                logo: action.data.logo,
                goods: action.data.goods,
                bg: action.data.bg
            });

        case actions.GET_HOME_SUCCESS:
            return Object.assign({}, state, {
                logo: action.data.logo,
                goods: action.data.goods,
                bg: action.data.bg
            });
        default:
            return state;
    }
}