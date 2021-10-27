export const styleTheme = {
  colors: {
    primary: {
      light: '#8fe5b8',
      main: '#1FCA71',
      dark: '#19a25a',
    },
    secondary: {
      light: '#eb888b',
      main: '#db2c30',
      dark: '#b72528',
    },
    surface: {
      light: '#f7f7f7',
      main: '#f5f5f5',
      dark: '#cccccc',
    },
    text: {
      contrastText: '#ffffff',
      topLight: '#bbbbbb',
      light: '#878787',
      main: '#545454',
      dark: '#3f3f3f',
    },
    border: {
      light: '#e9eaee',
      main: '#dfe1e6',
      dark: '#b2b4b8',
    },
  },
  fontSize: {
    large: 1.6,
    medium: 1.4,
    small: 1.2,
  },
  fontWeight: {
    bold: 600,
    normal: 500,
  },
  borderRadius: {
    large: 4,
    regular: 2,
  },
  spacing: (spaceValue: number) => spaceValue * 8,
};
