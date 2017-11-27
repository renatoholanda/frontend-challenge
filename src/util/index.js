import {put} from "redux-saga/effects"

import {FETCH_FAILED} from "../actions"

const APIHost = process.env.REACT_APP_API_HOST
export let ApiUserByUsername = (username) => `${APIHost}/users/${username}`
export let ApiUserRepos = (username) => `${APIHost}/users/${username}/repos`
export let ApiReposByName = (name) => `${APIHost}/repos/${name}`

/**
 * Send request with fetch
 *
 * @export
 * @param {string} url
 * @param {string} returnAction
 * @param {string} [errorAction=FETCH_FAILED]
 * @param {object} [params={}]
 * @param {object} callback
 * @param {object} [_data={}]
 * @param {object} callbackError
 */
export function * fetchUrl(url, returnAction, errorAction = FETCH_FAILED, params = {}, _data = {}, callback, callbackError) {
    try {
        const data = yield fetch(url, params);
        let jsonData;

        try {
            jsonData = yield data.json();
        } catch (e) {}

        if (data.status < 200 || data.status >= 300) {
            throw new Error((jsonData) ? JSON.stringify(jsonData) : JSON.stringify(data));
        }

        yield put({ type: returnAction, data: (jsonData || {}), _data });

        if (callback) {
            yield put(callback);
        }
    } catch (error) {
        let err = error;
        try {
            err = JSON.parse(error.message);
        } catch (e) {
            console.error(error);
        }

        yield put({type: errorAction, error: err, _data});

        if (callbackError) {
            yield put(callbackError)
        }
    }
}