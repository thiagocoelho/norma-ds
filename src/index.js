import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themes } from '../src/helpers/colors';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PrimaryColorProvider } from './context/PrimaryColorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.dark}>
      <PrimaryColorProvider color="red">
      <CssBaseline/>
      <App />
      </PrimaryColorProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
