import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
  }
}
const fontFamily = ['Noto Sans JP', 'sans-serif'].join(',');

export const muiTheme = createTheme({
  typography: {
    fontFamily: fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 10,
    body1: {
      fontSize: '1.4rem',
    },
    body2: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '1.4rem',
    },
  },
  palette: {
    primary: {
      light: '#8fe5b8',
      main: '#1FCA71',
      dark: '#19a25a',
      contrastText: '#ffffff',
    },
    secondary: {
      // 暫定的な色の為変更可能性あり
      light: '#f7f7f7',
      main: '#f5f5f5',
      dark: '#e9e9e9',
    },
    error: {
      light: '#eb888b',
      main: '#db2c30',
      dark: '#b72528',
      contrastText: '#ffffff',
    },
    text: { primary: '#545454', secondary: '#3f3f3f', disabled: '#9E9E9E' },
  },
  breakpoints: {
    values: {
      mobile: 768,
      tablet: 1024,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
  },
});
