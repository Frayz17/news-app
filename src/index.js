import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { newStore, StoreProvider, navigation, sport } from 'services/Store';
import App from './App';

newStore({ navigation, sport });

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
