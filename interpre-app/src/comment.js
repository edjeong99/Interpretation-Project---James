import React, { Component } from 'react';
import './App.css';
import CommentDisplay from './commentDisplay';
import CommentInputArea from './commentInputArea';

class Comment extends Component {

  render() {
//console.log("comment.js --> " + this.props.commentData );

  const Comments = (this.props.commentData) ? <CommentDisplay  commentData={this.props.commentData} /> : <div> Loading.. Comment.js.</div>;

    return (
     
        <div className="Comment"> 
            
             {Comments}
             <CommentInputArea />
        </div>
    );
  }
}

export default Comment;