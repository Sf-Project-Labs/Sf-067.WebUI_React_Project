import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#D72130',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #EDEDED',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#fff',
            boxShadow: '0px 7px 15px 2px #D2D2D2',
          },
        },
      },
    },
  },
});

export default theme;
