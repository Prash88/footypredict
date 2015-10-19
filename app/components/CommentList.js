import React, {Component} from 'react';
import Comment from './Comment.js';

var CommentList = React.createClass({

  render: function(){
   var commentNodes = <div/>;
   if(this.props.data) {
     var commentNodes = this.props.data.map((comment, index) => {
       return (
         <div>
           <Comment key={index} author={comment.author} remove={this.props.remove}>
            {comment.text}
            </Comment>
          </div>
        );
      });
    }
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  },

});

export default CommentList;
