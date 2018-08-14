import React, { Component } from 'react';
import './App.css';
import CommentDisplay from './commentDisplay';
import graph1 from './images/source images/capture_001_08072018_022824.jpg'
import graph2 from './images/source images/capture_002_08072018_022904.jpg'
import graph3 from './images/source images/capture_003_08072018_023002.jpg'
import graph4 from './images/source images/capture_004_08072018_023027.jpg'



class GraphDisplay extends Component {

  render() {
// console.log("graphDisplay.js --> " + typeof(this.props.displayItem) );
// console.log( this.props.displayItem );
//console.log("graphDisplay.js --> boolean " + Boolean(this.props.displayItem) );
 //const Comments = (this.props.displayItem) ? <Comment InterpData={this.props.displayItem} /> : <div> Loading... graph.js</div>;
  const createDate = (this.props.displayItem.created) ? this.props.displayItem.created.slice(0, this.props.displayItem.created.indexOf("T")) : "";
 
  const Comments = (this.props.displayItem.user) ? <CommentDisplay  name={this.props.displayItem.user.name} date={createDate} commentText={this.props.displayItem.text} /> : <div> Loading.. Comment.js.</div>;
 
    return (
     
        <div className="GraphDisplay"> 
            
          <img src={graph1} alt="sample graph" />
          {Comments}
        </div>
    );
  }
}

export default GraphDisplay;