import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        // In Japanese the characters are usually larger.
        fontSize: 30,
      },
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>
, document.getElementById('react-root'));
