'use strict';

import {Ajax, NameSpace} from '../servers/server';

let ns = NameSpace('Goods');
export const GET_GOODS_REQUEST = ns('GET_GOODS_REQUEST');
export const GET_GOODS_SUCCESS = ns('GET_GOODS_SUCCESS');
export const GET_GOODS_FAILED = ns('GET_GOODS_FAILED');

export function getGoods(){

    return (dispatch) => {

        dispatch({
            type : GET_GOODS_REQUEST,
            data : ""
        });

        Ajax({
            api: 'goods',
            method: 'get',
            data: {}
        },json => {
            dispatch({
                type : GET_GOODS_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_GOODS_FAILED,
                data : json
            });

        });

    }
}
