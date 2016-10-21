'use strict';

import {Ajax, NameSpace} from '../servers/server';

let ns = NameSpace('Home');
export const GET_HOMEM_REQUEST = ns('GET_HOMEM_REQUEST');
export const GET_HOMEM_SUCCESS = ns('GET_HOMEM_SUCCESS');
export const GET_HOMEM_FAILED = ns('GET_HOMEM_FAILED');

export const GET_HOMEN_REQUEST = ns('GET_HOMEN_REQUEST');
export const GET_HOMEN_SUCCESS = ns('GET_HOMEN_SUCCESS');
export const GET_HOMEN_FAILED = ns('GET_HOMEN_FAILED');

export function getHomeMessage(){

    return (dispatch) => {

        dispatch({
            type : GET_HOMEM_REQUEST,
            data : ""
        });

        Ajax({
            api: 'homeM',
            method: 'get',
            data: {}
        },json => {

            dispatch({
                type : GET_HOMEM_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_HOMEM_FAILED,
                data : json
            });

        });

    }
}

export function getHomeName(){

    return (dispatch) => {

        dispatch({
            type : GET_HOMEN_REQUEST,
            data : ""
        });

        Ajax({
            api: 'homeN',
            method: 'get',
            data: {}
        },json => {

            dispatch({
                type : GET_HOMEN_SUCCESS,
                data : json.data
            });

        },json => {
            dispatch({
                type : GET_HOMEN_FAILED,
                data : json
            });

        });

    }
}
