import React, { ReactNode, VFC } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css, ThemeProvider } from '@emotion/react';
import { styleTheme } from '../theme/theme';

interface Props {
  children: ReactNode;
}

export const breakPoint = [1023, 767];
export const mediaQuery = breakPoint.map((bp: number) => `@media(max-width: ${bp}px)`);

export const StyleThemeProvider: VFC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={styleTheme}>
      <Global
        styles={css`
          ${emotionReset}
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
            outline: 'none;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};
