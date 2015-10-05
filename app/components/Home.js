var React = require('react');
import { Navigation, RouteHandler } from 'react-router';
var Home = React.createClass({

  propTypes: {
    user: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      //user: 'default value'
    };
  },

  render: function(){
    return (
      <div>
        <h2 className="text-center">
          You are logged in.
        </h2>
      </div>
    );
  },

});

export default Home;
