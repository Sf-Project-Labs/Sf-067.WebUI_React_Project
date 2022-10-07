import { createTheme } from '@mui/material/styles';
import { cardActionAreaClasses } from '@mui/material';

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
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #EDEDED',
          '&:hover': {
            backgroundColor: '#fafafa',
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
            opacity: 0,
          },
        },
      },
    },
  },
});

export default theme;
