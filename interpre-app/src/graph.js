import React, { Component } from 'react';
import './App.css';
import GraphDisplay from './graphDisplay';
import Comment from './comment';
import graph1 from './images/source images/capture_001_08072018_022824.jpg'
import graph2 from './images/source images/capture_002_08072018_022904.jpg'
import graph3 from './images/source images/capture_003_08072018_023002.jpg'
import graph4 from './images/source images/capture_004_08072018_023027.jpg'


class Graph extends Component {
 constructor(props){
      super(props);

       this.state = {   
            open: false,
            InterpData: [],
            moreTerms: undefined,
            graphNo : graph1,
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

 console.log( this.state.graphNo);
    const Comments = (this.state.InterpData) ? <Comment InterpData={this.state.InterpData[0]} /> : <div> Loading... graph.js</div>;

    return (
     
        <div className="Graph"> 
             This is Graph1  
           <GraphDisplay displayGraph={this.state.graphNo} />
           {Comments}
      
        </div>
    );
  }
}

export default Graph;