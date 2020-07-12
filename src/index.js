import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './components/App';

const theme = {
  colors: {
    dark1: '#44001A',
    dark2: '#041F1E',
    light1: '#F5CCE8',
    light2: '#EDBFC6',
    pink: '#E01A4F',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
