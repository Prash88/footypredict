import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Test from '../components/Test';
import LoginHandler from '../components/Login';
import Utils from '../components/Utils';


import { Router, Route, DefaultRoute } from 'react-router';
import {Navigation} from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="login" handler={LoginHandler} />
    <Route name="home" handler={Home} onEnter={Utils.requireAuth} />
  </Route>
);
