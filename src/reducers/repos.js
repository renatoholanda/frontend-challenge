import {REPOS} from '../actions'

export function repos(state = {}, payload){
    switch (payload.type) {
        case REPOS.getByNameSuccess:
            return getByNameSuccess(state, payload);
        case REPOS.getByNameFailed:
            return getByNameFailed(state, payload);
        default:
            return state;
    }
}

function getByNameSuccess(state, payload){
    return {...payload.data};
}

function getByNameFailed(state, payload){
    alert("Repositório não encontrado");
    payload._data.history.replace("/");
    return state;
}