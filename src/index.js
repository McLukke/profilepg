import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import './common/global-styles';
import reducers from './reducers';
import routes from './routes';

export const store = createStore( // eslint-disable-line
  reducers,
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

// HMR
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <Router key={new Date()} history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'),
);
