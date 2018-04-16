import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/configureStore'
import history from './store/configureHistory'
import registerServiceWorker from './config/registerServiceWorker';

import App from './containers/App';
import './styles/index.css';



const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
