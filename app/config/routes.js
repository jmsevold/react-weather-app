import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../containers/Main';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
);

module.exports = routes;
