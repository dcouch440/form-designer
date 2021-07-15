import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StylesContextProvider } from './StylesContext';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

ReactDOM.render(
  <StylesContextProvider>
    <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
    </BrowserRouter>
  </StylesContextProvider>,
  document.getElementById('root')
);
