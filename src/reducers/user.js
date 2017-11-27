import {USER, FETCH_FAILED} from '../actions'

export function user(state = {}, payload){
    switch (payload.type) {
        case USER.getByUsernameSuccess:
            return getByUsernameSuccess(state, payload);
        case USER.getReposSuccess:
            return getReposSuccess(state, payload);
        case USER.getByUsernameFailed:
            return getByUsernameFailed(state, payload);
        case FETCH_FAILED:
            return getFailed(state, payload);
        default:
            return state;
    }
}

function getByUsernameSuccess(state, payload){
    return {...payload.data};
}

function getReposSuccess(state, payload){
    return {...state, repos: payload.data};
}

function getByUsernameFailed(state, payload){
    alert("Usuário não encontrado");
    payload._data.history.replace("/");
    return state;
}

function getFailed(state, payload){
    console.error(payload);
    return state;
}