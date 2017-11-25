import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import {routes} from '../routes'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {routes.map((route, i) => (<Route key={i} {...route}/>))}
                </Switch>
            </HashRouter>
        );
    }
}

export default App;