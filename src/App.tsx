import React, { VFC } from 'react';
import { StyleThemeProvider } from './theme/StyleThemeProvider';

export const App: VFC = () => {
  return (
    <StyleThemeProvider>
      <div />
    </StyleThemeProvider>
  );
};
