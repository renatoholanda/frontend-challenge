import React from 'react'
import Async from 'react-code-splitting'

const PageHome = (props) => <Async load={import('./views/home')} componentProps={props} />
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
    // 404
    {
        component: PageNotFound
    }

]