import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import jwtDecode from 'jwt-decode';
import configStore from './service/configStore';
import { setAuthToken }  from './helpers/Auth';
import { setUser } from './service/actions/userAction';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    configStore.dispatch(setUser(jwtDecode(localStorage.jwtToken)))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configStore}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
