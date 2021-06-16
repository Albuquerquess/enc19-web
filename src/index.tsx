import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React-loader-spinner style
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Global Styled
import GlobalStyles from './assets/styles/globalStyles'
import ResetCSS from './assets/styles/resetCSS'

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyles />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

