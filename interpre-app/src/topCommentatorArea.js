import React, { Component } from 'react';
import './App.css';
import FetchUtil from './util/FetchUtil';


class TopCommentatorArea extends Component {
  constructor(props){
      super(props);

       this.state = {
         topCommentators : [],
       }
  }

componentDidMount() {
FetchUtil.retrievetopCommentators((commentators) => {
       this.setState({topCommentators : commentators});
 //      console.log("topCommentators.js topCommentators =  " + this.state.topCommentators);
    });
}

  render() {
    let commentators ='';
    if (this.state.topCommentators.length >0){
      commentators = this.state.topCommentators.map(function(commentators, index){
      if(index < 5) return <div className = "topCommentators " >{index+1}. {commentators.name} </div>;
        })
      }

    return (
     
        <div className="TopCommentatorArea"> 
             This is TopCommentatorArea
              <div className="TopContentBox"> 
                {commentators}
              </div>
        </div>
    );
  }
}

export default TopCommentatorArea;