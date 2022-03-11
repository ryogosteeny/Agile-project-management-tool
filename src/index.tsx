import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { muiTheme } from './theme/muiTheme';
import { QueryProvider } from './providers/QueryProvider';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <QueryProvider>
        <CssBaseline />
        <App />
      </QueryProvider>
    </MuiThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
