import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../containers/Main';
import CityForecast from '../components/CityForecast'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/forecast/:city' component={CityForecast}></Route>
    </Route>
  </Router>
);

module.exports = routes;
