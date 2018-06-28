import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import store, { persistor, history } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './containers/App';

import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.css';
import './index.css';

const target = document.querySelector('#root');

const LoadingView = () => (
  <div>Loading...</div>
)

render(
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
);
