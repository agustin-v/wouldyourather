import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import history from '../store/configureHistory'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import reducers from '../reducers';
import sagas from '../sagas';


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history), logger);

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
          middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore( reducers, middleware )
    sagaMiddleware.run(sagas)
    return store;
}

