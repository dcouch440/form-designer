import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StylesContextProvider } from './StylesContext';


ReactDOM.render(
  <StylesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StylesContextProvider>,
  document.getElementById('root')
);
