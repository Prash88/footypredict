import React, {Component} from 'react';
import marked from 'marked';

var Comment = React.createClass({

  render: function(){
    return (
      <div className="well">
        <div className="row">
          <div className="col-xs-10">
            <h3 className="panel-title">{this.props.author} says :</h3>
            {this.props.children.toString()}
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-danger align-right"
              aria-label="Right Align"
              onClick={this.props.remove.bind(null, this.props.index)}>
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                Delete
            </button>
          </div>
        </div>
      </div>
    );
  },

});

export default Comment;
