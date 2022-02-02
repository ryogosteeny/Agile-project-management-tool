import React, { VFC } from 'react';
import { StyleThemeProvider } from './providers/StyleThemeProvider';

export const App: VFC = () => {
  return (
    <StyleThemeProvider>
      <div />
    </StyleThemeProvider>
  );
};
