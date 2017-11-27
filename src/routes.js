import React from 'react'
import Async from 'react-code-splitting'

const PageHome = (props) => <Async load={import('./views/home')} componentProps={props} />
const PageUser = (props) => <Async load={import('./views/user')} componentProps={props} />
const PageRepos = (props) => <Async load={import('./views/repos')} componentProps={props} />
const PageNotFound = (props) => <Async load={import('./views/errors/not-found')} componentProps={props} />

/**
 * All routes to app
 */
export const routes = [
    // Home
    {
        path: '/',
        component: PageHome,
        exact: true
    },
    // User
    {
        path: '/user/:username',
        component: PageUser
    },
    // Repos
    {
        path: '/repos/:user/:name',
        component: PageRepos
    },
    // 404
    {
        component: PageNotFound
    }

]