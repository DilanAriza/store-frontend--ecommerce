//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux'
import {createStore, compose} from 'redux'

//Config Redux
import reducer from './reducers';

//App
import App from './routes/App';
import initialState from './initialState';

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));