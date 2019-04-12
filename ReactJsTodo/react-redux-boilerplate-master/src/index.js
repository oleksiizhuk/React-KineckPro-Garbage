/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/configureStore';

require('./favicon.ico');
const store = configureStore();
import { Provider } from 'react-redux'
import { Router, Route, Redirect, browserHistory } from 'react-router'


import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/main-page" component={App}/>
      <Redirect from="*" to="/main-page"/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
