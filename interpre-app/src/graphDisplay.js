import React, { Component } from 'react';
import './App.css';
import Comment from './comment';
import graph1 from './images/source images/capture_001_08072018_022824.jpg'
import graph2 from './images/source images/capture_002_08072018_022904.jpg'
import graph3 from './images/source images/capture_003_08072018_023002.jpg'
import graph4 from './images/source images/capture_004_08072018_023027.jpg'



class GraphDisplay extends Component {

  render() {
console.log("graphDisplay.js --> " + this.props.displayItem );
 const Comments = (this.props.displayItem) ? <Comment InterpData={this.props.displayItem} /> : <div> Loading... graph.js</div>;

    return (
     
        <div className="GraphDisplay"> 
            
          <img src={graph1} alt="sample graph" />
          {Comments}
        </div>
    );
  }
}

export default GraphDisplay;