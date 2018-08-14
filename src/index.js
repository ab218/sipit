import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        fontSize: 25,
        fontFamily: 'Slabo 27px',
    },
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>
, document.getElementById('react-root'));
