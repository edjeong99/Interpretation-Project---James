import React, { Component } from 'react';
import './App.css';
import graph from './images/source images/capture_001_08072018_022824.jpg'



class GraphDisplay extends Component {

  render() {

    return (
     
        <div className="GraphDisplay"> 
            
       <img src={graph} alt="sample graph" />

        </div>
    );
  }
}

export default GraphDisplay;