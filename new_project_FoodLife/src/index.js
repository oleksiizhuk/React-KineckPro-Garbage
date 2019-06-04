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
import MainPage from './scenees/MainPage';
import '../libs/bootstrap-4.3.1/dist/css/bootstrap.css';
import '../libs/bootsrap-4/bootstrap.css';
import '../libs/bootsrap-4/bootstrap-theme.css';



const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/main-page" component={App}/>
      <Route path="/main" component={MainPage}/>
      <Redirect from="*" to="/main"/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
