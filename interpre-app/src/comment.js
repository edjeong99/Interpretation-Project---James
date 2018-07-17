import React, { Component } from 'react';
import './App.css';
import CommentDisplay from './commentDisplay';
import CommentInputArea from './commentInputArea';

class Comment extends Component {

  render() {

    return (
     
        <div className="Comment"> 
            
             <CommentDisplay />
             <CommentInputArea />
        </div>
    );
  }
}

export default Comment;