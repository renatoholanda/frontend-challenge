import {takeEvery} from "redux-saga/effects"
// import {fetchUrl, TOKEN, USER_ID, API_HOST, API_MOBILE_HOME} from
// '../../util'
import {fetchUrl, ApiReposByName} from '../util'
import {REPOS} from '../actions'


export function * getReposByName(payload) {
    let url = ApiReposByName(payload.name);
    let params = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    }

    yield fetchUrl(url, REPOS.getByNameSuccess, REPOS.getByNameFailed, params, payload);
}

export function * watchGetReposByName() {
    yield takeEvery(REPOS.getByName, getReposByName);
}
