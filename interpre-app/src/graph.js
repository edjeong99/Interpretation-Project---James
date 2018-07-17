import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';
import Comment from './comment';


class Graph extends Component {
 constructor(props){
      super(props);

       this.state = {}
 
  }
 
  componentDidMount() {
  fetch('http://localhost:3000/interpretations.json')
  .then(response => response.json())
  .then( jasonData => {

    this.setState({data : jasonData.interpretations});
        console.log("graph.js  user = " + this.state.data[0]);

  });


}

  render() {
    
    return (
     
        <div className="Graph"> 
             This is Graph1
           <GraphDisplay />
           <Comment key="1" comment={this.state.data} />
        </div>
    );
  }
}

export default Graph;