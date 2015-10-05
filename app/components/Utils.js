var Firebase = require('firebase');

module.exports = {

getCurrentUser:function() {
   return localStorage.currentUser;
},

isLoggedIn:function() {
  var ref = new Firebase("https://footypredict.firebaseio.com");
  var authData = ref.getAuth();

  if (authData) {
    localStorage.currentUser = authData.facebook.displayName;
    return true;
  }
  else {
    return false;
  }
},

requireAuth:function() {
  if(!Utils.isLoggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
},

}
