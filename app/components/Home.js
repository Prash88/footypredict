var React = require('react');
import { Navigation, RouteHandler } from 'react-router';
import Utils from './Utils';

var Home = React.createClass({

  mixins: [ Navigation ],

  propTypes: {
    user: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      //user: 'default value'
    };
  },

  componentWillMount:function() {
    if(!Utils.isLoggedIn())
      this.replaceWith('/login');
  },

  render: function(){
    return (
      <div>
        <h2 className="text-center">
          Welcome {Utils.getCurrentUser()}
        </h2>
      </div>
    );
  },

});

export default Home;
