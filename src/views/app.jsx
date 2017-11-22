import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import {routes} from '../routes'

class App extends Component {
    render() {
        return (
            <div id="app">
                <HashRouter>
                    <div>
                        <Switch>
                            {routes.map((route, i) => (<Route key={i} {...route}/>))}
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;