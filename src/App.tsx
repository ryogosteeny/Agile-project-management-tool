import React, { VFC } from 'react';
import { QueryProvider } from './providers/QueryProvider';
import { StyleThemeProvider } from './providers/theme/StyleThemeProvider';

export const App: VFC = () => {
  return (
    <StyleThemeProvider>
      <QueryProvider>
        <div />
      </QueryProvider>
    </StyleThemeProvider>
  );
};
