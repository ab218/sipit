import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom'


const theme = createMuiTheme({
    typography: {
        fontSize: 25,
        fontFamily: 'Do Hyeon 27px',
    },
});

ReactDOM.render(
    <BrowserRouter>
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>
</BrowserRouter>
, document.getElementById('react-root'));
