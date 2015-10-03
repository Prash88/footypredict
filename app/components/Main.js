import { Navigation, RouteHandler } from 'react-router';
import theme from '../styles/index.less';
var React = require('react');
var Firebase = require('firebase');

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
      this.transitionTo('/home');
      //alert("Authenticated with uid:"+authData.displayName);
    } else {
      this.setState({loggedIn:false});
      this.transitionTo('/');
      //alert("Client unauthenticated.")
    }
  },

  offAuthHandler:function(authData) {
    if (authData) {
      this.setState({loggedIn:true});
      this.transitionTo('/home');
      //alert("Authenticated with uid:"+authData.provider);
    } else {
      this.setState({loggedIn:false});
      this.transitionTo('/');
      //alert("Client unauthenticated.")
    }
  },

  render:function(){
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
  },

});

export default Main;
