import React, {Component} from 'react';
import Utils from './Utils';

var commentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.text.getDOMNode().value;
    if (!text) {
      return;
    }
    this.props.add({author: Utils.getCurrentUser(), text: text});
    this.refs.text.getDOMNode().value = '';
    return;
  },

  render:function() {
    return (
      <div className="well">
        <form className="form-inline" role="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input className="form-control" type="text" rows="3" placeholder="Your Comment..." ref='text'/>
            <input type="submit" className="btn btn-primary" value="Post" />
          </div>
        </form>
      </div>
    );
  },

});

export default commentForm;
