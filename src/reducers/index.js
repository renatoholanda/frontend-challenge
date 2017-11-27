import {combineReducers} from 'redux'
import {user} from './user'
import {repos} from './repos'

/**
 * Reducers root to combine all reducers
 */
export const rootReducer = combineReducers({
    user,
    repos
});