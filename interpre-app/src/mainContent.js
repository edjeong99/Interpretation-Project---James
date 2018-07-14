import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Graph1 from './graph1';

class MainContent extends Component {

  render() {

    return (
     
        <div className="MainContent"> 
             This is MainContent
                
        <Search />
        <Graph1 />
      
        </div>
    );
  }
}


export default MainContent;