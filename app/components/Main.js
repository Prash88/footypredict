import React from 'react';
import { RouteHandler } from 'react-router';
import theme from '../styles/index.less';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            React Webpack Bootstrap Heroku Boilerplate
          </div>
        </nav>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

export default Main;
