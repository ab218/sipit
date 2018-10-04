import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const rootReducer = combineReducers(reducers);

const mw = applyMiddleware(thunk);
const decorators = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(mw, window.__REDUX_DEVTOOLS_EXTENSION__())
  : mw;

const store = createStore(
  rootReducer,
  decorators,
);

export default store;
