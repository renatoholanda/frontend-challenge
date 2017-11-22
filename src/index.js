import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'

import {rootReducer} from './reducers/'
import {rootSaga} from './sagas/'
import App from './views/app'
import './assets/css/app.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        root: rootReducer
   }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
