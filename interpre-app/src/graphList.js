import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';

import graph1 from './images/source images/capture_001_08072018_022824.jpg'
import graph2 from './images/source images/capture_002_08072018_022904.jpg'
import graph3 from './images/source images/capture_003_08072018_023002.jpg'
import graph4 from './images/source images/capture_004_08072018_023027.jpg'


class GraphList extends Component {
 constructor(props){
      super(props);

       this.state = {   
            open: false,
            InterpData: [],
            moreTerms: undefined,
     
       }

  }
   
  
  componentDidMount() {
 
  fetch('http://localhost:3000/interpretations.json')
  .then(response => response.json())
  .then( jasonData => {

    this.setState({InterpData : jasonData.interpretations});
   //     console.log( "graph.js -->  " + this.state.InterpData);
    });
  
 }

  componentWillReceiveProps (nextProps){
    console.log("graph.js componentWillReceiveProps " + nextProps.displayItem);
 

    if (this.props.displayItem !== nextProps.displayItem){
      if(nextProps.displayItem ==[]){
        this.setState({
            graphNo : graph1, 
      });
        console.log("graph.js componentWillReceiveProps   search=false" + this.state.graphNo);
      }

      else {

        this.setState({
            graphNo : graph2, 
           });
        console.log("graph.js componentWillReceiveProps   search=true" + this.state.graphNo);
      }
    }

  }


  render() {

 console.log( "graphList.js" + this.props.searched);
if ( this.props.searched){
    this.setState ( {InterpData : this.props.displayItem });
    console.log("graphList.js  if search = true --> " + this.state.InterpData);
}
 
    return (
     
        <div className="Graph"> 
             This is Graph1  
           <GraphDisplay displayItem = {this.state.InterpData} />
          
      
        </div>
    );
  }
}

export default GraphList;