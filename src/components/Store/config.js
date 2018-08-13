import { createStore , compose , applyMiddleware } from 'redux';
import promisedMiddleware from 'redux-promise';
import reducers from './reducers'

let reduxCompose = compose;

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(reducers, reduxCompose(applyMiddleware(promisedMiddleware)))
}

export default configureStore;