import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Test from '../components/Test';
import LoginHandler from '../components/Login';


import { Router, Route, DefaultRoute } from 'react-router';
import {Navigation} from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={LoginHandler} />
    <Route name="home" path="/home" handler={Home} />
  </Route>
);
