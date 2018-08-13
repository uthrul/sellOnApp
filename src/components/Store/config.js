import { createStore , compose , applyMiddleware } from 'redux';
import promisedMiddleware from 'redux-promise';
import Reducers from "./reducers";

let reduxCompose = compose;

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(Reducers, reduxCompose(applyMiddleware(promisedMiddleware)))
}

export default configureStore;