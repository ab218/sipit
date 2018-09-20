import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import reducers from './reducers';
import App from './components/App';


const theme = createMuiTheme({
  typography: {
    fontSize: 25,
    fontFamily: 'Do Hyeon 27px',
  },
});

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
