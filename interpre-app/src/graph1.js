import React, { Component } from 'react';
import './App.css';
import graph from './images/source images/capture_001_08072018_022824.jpg'



class Graph1 extends Component {

  render() {

    return (
     
        <div className="Graph1"> 
             This is Graph1
       <img src={graph} className="Graph" alt="sample graph" />

        </div>
    );
  }
}

export default Graph1;