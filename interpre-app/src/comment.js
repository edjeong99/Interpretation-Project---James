import React, { Component } from 'react';
import './App.css';
import CommentDisplay from './commentDisplay';
import CommentInputArea from './commentInputArea';

class Comment extends Component {

  render() {
console.log("comment.js --> " + this.props.InterpData.created );
  var createDate = "111";
// (this.props.InterpData) ? this.props.InterpData.created.slice(0, this.props.InterpData.created.indexOf("T")) : "";
// const Comments = (this.props.InterpData) ? <CommentDisplay  name={this.props.InterpData.user.name} date={createDate} commentText={this.props.InterpData.text} /> : <div> Loading.. Comment.js.</div>;
 

    return (
      <div></div>
  /*   
        <div className="Comment"> 
            
             {Comments}
             <CommentInputArea />
        </div>   */
    );
  }
 
}

export default Comment;

