import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Test from '../components/Test';

import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
    <Route path="test" handler={Test} />
  </Route>
);
