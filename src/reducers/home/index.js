'use strict';
//import {GET_DATA, UPDATE_DATA} from '../../actions/home';
import * as actions from '../../actions/home';
//对页面prop 数据进行管理
const initialState = {
    img: [],
    listLoading: false,
    name: [],
};
export default function index(state = initialState, action = {}) {

    switch (action.type) {
        case actions.GET_HOMEM_FAILED:
            return Object.assign({}, state, {
                img: action.data
            });

        case actions.GET_HOMEM_SUCCESS:
            return Object.assign({}, state, {
                img: action.data
            });

        case actions.GET_HOMEN_SUCCESS:
            return Object.assign({}, state, {
                name: action.data
            });

        case actions.GET_HOMEN_SUCCESS:
            return Object.assign({}, state, {
                name: action.data
            });

        case actions.GET_HOMEM_FAILED:
        case actions.GET_HOMEN_FAILED:
            return Object.assign({}, state, {
                listLoading: false
            });
        default:
            return state;
    }
}