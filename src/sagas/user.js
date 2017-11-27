import {takeEvery} from "redux-saga/effects"
// import {fetchUrl, TOKEN, USER_ID, API_HOST, API_MOBILE_HOME} from
// '../../util'
import {fetchUrl, ApiUserByUsername, ApiUserRepos} from '../util'
import {USER, FETCH_FAILED} from '../actions'

export function * getUserByUsername(payload) {
    let url = ApiUserByUsername(payload.username);
    let params = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    }

    yield fetchUrl(url, USER.getByUsernameSuccess, USER.getByUsernameFailed, params, payload);
}

/**
 * Observer for USER.getByUsername action
 * 
 * @export
 */
export function * watchGetUserByUsername() {
    yield takeEvery(USER.getByUsername, getUserByUsername);
}

export function * getUserRepos(payload) {
    let url = ApiUserRepos(payload.username);
    let params = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    }

    yield fetchUrl(url, USER.getReposSuccess, FETCH_FAILED, params, payload);
}

/**
 * Observer for USER.getRepos action
 * 
 * @export
 */
export function * watchGetUserRepos() {
    yield takeEvery(USER.getRepos, getUserRepos);
}