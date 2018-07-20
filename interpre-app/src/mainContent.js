import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Graph from './graph';
import FetchUtil from './FetchUtil';

class MainContent extends Component {


    /*  
    FetchUtil.searchById( interId, ( dataJson ) => {
      console.log(dataJson);
    });

  fetch('http://localhost:3000/interpretations.json')
  .then(response => response.json())
  .then( jasonData => {

    this.setState({commentData : jasonData.interpretations});
        console.log( "graph.js -->  " + this.state.commentData);
  });
}
  */


handleIdSearch = (id) => {
 // alert('mainContent.js ' + id);

FetchUtil.searchById( id, ( dataJson ) => {
      console.log(dataJson);
    });

}

  render() {



    return (
     
        <div className="MainContent"> 
             This is MainContent
                
        <Search onIdSubmit={this.handleIdSearch} />
        <Graph />
      
        </div>
    );
  }
}


export default MainContent;