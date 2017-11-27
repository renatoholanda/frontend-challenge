import {watchGetUserByUsername, watchGetUserRepos} from './user'
import {watchGetReposByName} from './repos'

/**
 * Sagas root to call all observers
 * 
 * @export
 */
export function * rootSaga() {
    yield[
        watchGetUserByUsername(),
        watchGetUserRepos(),
        watchGetReposByName()
    ]
}