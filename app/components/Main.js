import React from 'react';
import { RouteHandler } from 'react-router';
import theme from '../styles/index.less';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <h2 className="text-center">
            Welcome to FootyPredict
          </h2>
        </nav>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

export default Main;
