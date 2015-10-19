var React = require('react');
import { Navigation, RouteHandler } from 'react-router';
import Utils from './Utils';
import Rebase from 're-base';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

var base = Rebase.createClass('https://footypredict.firebaseio.com/comments');

var Home = React.createClass({

  mixins: [ Navigation ],

  propTypes: {
    data: [],
  },

  getInitialState: function() {
     return {
       loggedIn: false,
     };
   },

  componentWillMount:function() {
    if(!Utils.isLoggedIn())
      this.replaceWith('/login');
  },

  componentDidMount:function(){
    this.ref = base.syncState('commentList', {
      context: this,
      state: 'data',
      asArray: true
    });
  },

  handleAddItem:function(comment){
    this.setState({
      data: this.state.data.concat([comment])
    });
  },

  handleRemoveItem:function(index) {
    var newData = this.state.data;
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
  },

  componentWillUnmount:function(){
    base.removeBinding(this.ref);
  },

  render: function(){
    return (
      <div className='container'>
        <div className="jumbotron">
          <h2 className="text-center">
            Welcome {Utils.getCurrentUser()}
          </h2>
        </div>
        <CommentList data={this.state.data} remove={this.handleRemoveItem.bind(this)} />
        <CommentForm add={this.handleAddItem.bind(this)} />
      </div>
    );
  },

});

export default Home;
