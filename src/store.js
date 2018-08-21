import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStore = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer, 
    initialStore, 
    compose(
        applyMiddleware(...middleWare)
    )
);

export default store;