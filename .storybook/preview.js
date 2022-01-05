import React from 'react';
import { StyleThemeProvider } from '../src/providers/StyleThemeProvider';

export const decorators = [
  (Story) => (
    <StyleThemeProvider>
      <Story />
    </StyleThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    layout: 'centered',
  },
};
