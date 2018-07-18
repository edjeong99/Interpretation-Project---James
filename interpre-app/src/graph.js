import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';
import Comment from './comment';


class Graph extends Component {
 constructor(props){
      super(props);

       this.state = {   
            open: false,
            commentData: [],
            moreTerms: undefined,
       }
 
  }
 
  componentWillMount() {
  fetch('http://localhost:3000/interpretations.json')
  .then(response => response.json())
  .then( jasonData => {

    this.setState({commentData : jasonData.interpretations});
        console.log( "graph.js -->  " + this.state.commentData);

  });


}

  render() {
    const Comments = (this.state.commentData) ? <Comment commentData={this.state.commentData[0]} /> : <div> Loading...</div>;

    return (
     
        <div className="Graph"> 
             This is Graph1
           <GraphDisplay />
           {Comments}
      
        </div>
    );
  }
}

export default Graph;