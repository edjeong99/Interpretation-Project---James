import React, { Component } from 'react';
import './App.css';
import Search from './search';
import GraphList from './graphList';
import FetchUtil from './util/FetchUtil';

class MainContent extends Component {
  constructor(props){
      super(props);

       this.state = {
         searchedData :[],
         searched : false,
       }
  }


handleIdSearch(id) {
 // alert('mainContent.js ' + id);

  FetchUtil.searchById( id, ( dataJson ) => {
      console.log("mainContent.js searchByID  " + dataJson);
      this.setState({searchedData : dataJson});
    });
}

  render() {
 
    return (
     
        <div className="MainContent"> 
             This is MainContent
                
        <Search onIdSubmit={this.handleIdSearch}  />
        <GraphList displayItem = {this.state.searchedData} searched = {this.state.searched} />
      
        </div>
    );
  } 
}


export default MainContent;