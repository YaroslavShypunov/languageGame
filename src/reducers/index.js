import { combineReducers, createStore, applyMiddleware, compose  } from 'redux';
import WordReducer from './WordReducer';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        WordReducer,
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
