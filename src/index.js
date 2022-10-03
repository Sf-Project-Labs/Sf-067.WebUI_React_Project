import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{}} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
