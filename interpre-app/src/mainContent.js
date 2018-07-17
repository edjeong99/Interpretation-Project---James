import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Graph from './graph';

class MainContent extends Component {

  render() {

    return (
     
        <div className="MainContent"> 
             This is MainContent
                
        <Search />
        <Graph />
      
        </div>
    );
  }
}


export default MainContent;