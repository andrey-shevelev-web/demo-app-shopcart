import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrBoundry from './components/err-boundry';
import StoreService from './services/store-service';
import { StoreServiceProvider } from './components/store-service-context';

import store from './store';

const storeService = new StoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrBoundry>
      <StoreServiceProvider value={storeService}>
        <Router>
          <App />
        </Router>
      </StoreServiceProvider>
    </ErrBoundry>
  </Provider>,
  document.getElementById('root')
);