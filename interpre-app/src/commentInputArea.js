import React, { Component } from 'react';
import './App.css';



class CommentInputArea extends Component {

  render() {

    return (
     
        <div className="CommentInputArea"> 
   
           <form method="post" action="">
                <textarea name="comments" cols="70" rows="3" className="CommentInput">Add a comments ...</textarea>
                <input type="submit" value="Submit" className="CommentSubmit"></input>
            </form>
        </div>
    );
  }
}

export default CommentInputArea;


