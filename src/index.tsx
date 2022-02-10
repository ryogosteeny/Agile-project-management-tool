import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { muiTheme } from './theme/muiTheme';
import { QueryProvider } from './providers/QueryProvider';
import { css, Global } from '@emotion/react';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }

          body {
            font-family: 'Noto Sans JP', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          p,
          dl,
          dd {
            margin: 0;
            padding: 0;
            line-height: 1;
          }

          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }

          button,
          input,
          select,
          textarea {
            background-color: transparent;
            border-style: none;
          }

          h1 {
            font-size: 4.2rem;
            font-weight: 700;
          }

          h2 {
            font-size: 3.4rem;
            font-weight: 700;
          }

          h3 {
            font-size: 2.6rem;
            font-weight: 600;
          }

          h4 {
            font-size: 2rem;
            font-weight: 600;
          }

          li {
            list-style: none;
          }

          a {
            text-decoration: none;
          }
          button {
            outline: none;
          }
        `}
      />
      <QueryProvider>
        <CssBaseline />
        <App />
      </QueryProvider>
    </MuiThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
