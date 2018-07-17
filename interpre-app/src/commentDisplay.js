import React, { Component } from 'react';
import './App.css';



class CommentDiplay extends Component {

  render() {

    return (
     
        <div className="CommentDiplay"> 
   
          <div className="Line1" >
            <div className="Name"> John Doe    </div>
            <div className="Time"> 11.23.2018 </div>
          </div>
          <div className="CommentContent Line2"> comment blar blur blus </div>
        </div>
    );
  }
}

export default CommentDiplay;