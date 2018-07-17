import React, { Component } from 'react';
import './App.css';



class Search extends Component {

  render() {

    return (
     
        <div className="Search"> 
             
           <form>
             <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            <input type="search" placeholder="Search Interpretation"></input>
            </form>
        </div>
    );
  }
}

export default Search;