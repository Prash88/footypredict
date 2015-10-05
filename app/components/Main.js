import { Navigation, RouteHandler } from 'react-router';
import theme from '../styles/index.less';
var React = require('react');
var Firebase = require('firebase');
import Utils from './Utils';

var Main = React.createClass({

  mixins: [ Navigation ],

  getInitialState: function() {
     return {
       loggedIn: false,
     };
   },

  componentWillMount:function() {
    var ref = new Firebase("https://footypredict.firebaseio.com");
    ref.onAuth(this.onAuthHandler);
    ref.offAuth(this.offAuthHandler);
  },

  onAuthHandler:function(authData) {
    if (authData) {
      this.setState({loggedIn:true});
      this.replaceWith('/home');
      //alert("Authenticated with uid:"+authData.displayName);
    } else {
      this.setState({loggedIn:false});
      this.replaceWith('/login');
      //alert("Client unauthenticated.")
    }
  },

  offAuthHandler:function(authData) {
    if (authData) {
      this.setState({loggedIn:true});
      this.replaceWith('/home');
      //alert("Authenticated with uid:"+authData.provider);
    } else {
      this.setState({loggedIn:false});
      this.replaceWith('/login');
      //alert("Client unauthenticated.")
    }
  },

  handleLogOut:function() {
    var ref = new Firebase("https://footypredict.firebaseio.com");
    ref.unauth();
  },

  render:function(){
    var logoutDom = (Utils.isLoggedIn())?
    <div>
      <ul className="nav navbar-nav navbar-right">
        <li><a onClick={this.handleLogOut}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>:<div></div>;
    return (
      <div className="main-container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">FootyPredict</a>
            </div>
            {logoutDom}
          </div>
        </nav>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  },

});

export default Main;
