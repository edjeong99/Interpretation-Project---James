import React, { Component } from 'react';
import './App.css';



class CommentDiplay extends Component {

  render() {

//console.log("commentDisplay.js --> " + typeof(this.props.commentData) + this.props.commentData );


 //var date = this.props.commentData.created.slice(0, this.props.commentData.created.indexOf("T"));

    return (
       <div className="CommentDiplay"> 
         <div className="Line1" >
            <div className="Name"> {this.props.name}   </div>
            <div className="Time"> {this.props.date} </div>
          </div>
         <div className="CommentContent Line2"> {this.props.commentText}  </div>
      </div>
    );
  }
}

export default CommentDiplay;

{/*}
{<div className="CommentDiplay"> <div className="Line1" >
            <div className="Name"> {this.props.commentData.user.name}   </div>
            <div className="Time"> 11.23.2018 </div>
          </div>
          <div className="CommentContent Line2"> comment blar blur blus </div> </div>} 
          */}