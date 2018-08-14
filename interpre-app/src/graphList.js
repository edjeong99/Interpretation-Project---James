import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';

import graph1 from './images/source images/capture_001_08072018_022824.jpg'
import graph2 from './images/source images/capture_002_08072018_022904.jpg'
import graph3 from './images/source images/capture_003_08072018_023002.jpg'
import graph4 from './images/source images/capture_004_08072018_023027.jpg'


class GraphList extends Component {


  render() {

let graphDisplay ='';

// console.log( "graphList.js  length  = " +  this.props.displayItem.length );
// console.log( this.props.displayItem);

if (this.props.displayItem.length > 0){
    graphDisplay = this.props.displayItem.map (function (item, key){
        if(key <3)  return <GraphDisplay displayItem = {item} />;
    }) 
} 
else {
    graphDisplay = <GraphDisplay displayItem = {this.props.displayItem} /> ;
   }    
// console.log( graphDisplay );

    return (
     
        <div className="Graph"> 
             This is Graph1  
           {graphDisplay}
          
      
        </div>
    );
  }
}

export default GraphList;