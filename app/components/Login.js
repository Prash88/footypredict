import React from 'react';
import Firebase from 'firebase';

class Login extends React.Component{

  componentWillMount() {

  }

  handleFacebookLogin() {
    var ref = new Firebase("https://footypredict.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        alert("Login Failed! " + error);
      } else {
        var url = 'https://footypredict.firebaseio.com/users/'+authData.facebook.id;
        var usersref = new Firebase(url);
        usersref.set({ 'id': authData.facebook.id,
                        'name': authData.facebook.displayName,
                        'profileImageURL': authData.facebook.profileImageURL,
                        'source': 'facebook',
        });
      }
    });
  }

  handleTwitterLogin() {
    var ref = new Firebase("https://footypredict.firebaseio.com");
    ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        alert("Login Failed! " + error);
      } else {
        var url = 'https://footypredict.firebaseio.com/users/'+authData.twitter.id;
        var usersref = new Firebase(url);
        usersref.set({ 'id': authData.twitter.id,
                        'name': authData.twitter.displayName,
                        'profileImageURL': authData.twitter.profileImageURL,
                        'source': 'twitter',
        });
      }
    });
  }

  render(){
    return (
      <div>
        <br/>
        <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebookLogin}>
          <i className="fa fa-facebook"></i> Sign in with Facebook
        </a>
        <br/>
        <br/>
        <a className="btn btn-block btn-social btn-twitter" onClick={this.handleTwitterLogin}>
          <i className="fa fa-twitter"></i> Sign in with Twitter
        </a>
      </div>
    )
  }
};

export default Login;
