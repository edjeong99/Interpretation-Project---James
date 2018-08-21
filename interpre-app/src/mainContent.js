import React, { Component } from 'react';
import './App.css';
import Search from './search';
import GraphList from './graphList';
import FetchUtil from './util/FetchUtil';

class MainContent extends Component {
  constructor(props){
      super(props);

       this.state = {
         InterpData :[],
         searched : false,
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

handleIdSearch = (id)=>{

   FetchUtil.searchById( id, ( dataJson ) => {
       this.setState({InterpData : dataJson});
       console.log("mainContent.js searchByID  " + this.state.InterpData);
    });


}

  render() {
 
    return (
     
        <div className="MainContent"> 
                            
          <Search onIdSubmit={this.handleIdSearch}  />
          <GraphList displayItem = {this.state.InterpData} />
      
        </div>
    );
  } 
}


export default MainContent;