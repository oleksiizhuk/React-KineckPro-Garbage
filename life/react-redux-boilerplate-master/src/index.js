/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
//import 'bootstrap/dist/css/bootstrap.css';

require('./favicon.ico');
const store = configureStore();
import {Provider} from 'react-redux'
import {Router, Route, Redirect, browserHistory} from 'react-router'


import {syncHistoryWithStore} from 'react-router-redux'
import App from './components/App';
import Main from "./scenes/Main";
import Name from "./scenes/Name";
import Todo from "./scenes/Todo";
import MainPage from "./scenes/MainPage";

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/main-page" component={App}/>
      <Route path="/main" component={Main}/>
      <Route path="/name" component={Name}/>
      <Route path="/todo" component={Todo}/>
      <Route path="/MainPage" component={MainPage}/>
      <Redirect from="*" to="/todo"/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
