import React, { Component } from 'react';
import './App.css';
import FetchUtil from './util/FetchUtil';


class TopArthorArea extends Component {

  constructor(props){
      super(props);

       this.state = {
         topAuthors : [],
       }
  }

componentDidMount() {
FetchUtil.retrieveTopAuthors((authors) => {
       this.setState({topAuthors : authors});
      //  console.log("topArthor.js topArthors =  " + this.state.topAuthors);
    });
}

  render() {
    let authors ='';
    if (this.state.topAuthors.length >0){
      authors = this.state.topAuthors.map(function(author, index){
         if (index < 5) return <div className = "topAuthor " >{index+1}. {author.name} </div>;
        })
      }
    
  // const authors = (this.state.topAuthor.length >0) ? <div className = "topAuthor">{this.state.topAuthor[0].name} </div> : "" ;

    return (
     
        <div className="TopArthorArea"> 
             This is TopArthorArea
             <div className="TopContentBox">
            {authors}
            </div>
        </div>
    );
  }
}

export default TopArthorArea;