'use strict';

import {Ajax, NameSpace} from '../servers/server';

let ns = NameSpace('Home');
export const GET_HOME_REQUEST = ns('GET_HOME_REQUEST');
export const GET_HOME_SUCCESS = ns('GET_HOME_SUCCESS');
export const GET_HOME_FAILED = ns('GET_HOME_FAILED');

export function getHome(){

    return (dispatch) => {

        dispatch({
            type : GET_HOME_REQUEST,
            data : ""
        });

        Ajax({
            api: 'home',
            method: 'get',
            data: {}
        },json => {

            dispatch({
                type : GET_HOME_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_HOME_FAILED,
                data : json
            });

        });

    }
}