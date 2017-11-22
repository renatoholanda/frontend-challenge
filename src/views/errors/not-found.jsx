import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

class PageNotFound extends Component {
    render() {
        return (
            <div id="page-not-found">
                404 - Page not found
            </div>
        );
    }
}

export default PageNotFound;
