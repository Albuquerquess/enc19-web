import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Global Styled
import GlobalStyles from './assets/styles/globalStyles'
import ResetCSS from './assets/styles/resetCSS'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ResetCSS />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

