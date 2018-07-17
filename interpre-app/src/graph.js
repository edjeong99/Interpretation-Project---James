import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';
import Comment from './comment';


class Graph extends Component {

  render() {

    return (
     
        <div className="Graph"> 
             This is Graph1
           <GraphDisplay />
           <Comment />
        </div>
    );
  }
}

export default Graph;