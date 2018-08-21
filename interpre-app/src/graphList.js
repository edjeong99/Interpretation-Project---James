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
        items:2,
        loadingState : false,
    };
}

componentDidMount() {
    // console.log("inside of componentDidMount");
    let scrollDiv = document.getElementById("scrollDiv")
    this.refs.iScroll.addEventListener("scroll", () => {
        // console.log("scroll EventListner  " +this.refs.iScroll.scrollTop +"  "+ this.refs.iScroll.clientHeight + "  " +this.refs.iScroll.scrollHeight );
      if (!this.state.loadingState && this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight-50){
        this.loadMoreItems();
      }
    });
  }
//316, 600  height 1116
displayItems() {
    var items = [];
   if (this.props.displayItem.length > 0){
        for (var i = 0; i < this.state.items; i++) {
            console.log( i + "inside display loop " + this.props.displayItem[i]);
        items.push(<li key={i}><GraphDisplay displayItem = {this.props.displayItem[i]} /></li>);
        }
    }
    else {
        items.push(<li key={i}><GraphDisplay displayItem = {this.props.displayItem} /> </li>);
    }    
    return items;
}

  loadMoreItems() {
       console.log("LOAD MOREA" + this.state.items);
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 2, loadingState: false });
    }, 3000);
  }

  render() {

/* let graphDisplay ='';

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
*/
    return (
     
        <div className="vc Graphs" id = "scrollDiv"
        ref="iScroll"
        style={{height:"1020px", overflow:"scroll"}}> 
            <ul>
               {this.displayItems()}
           </ul>
           
           {this.state.loadingState ? <p className="loading"> loading More Items.. </p> : ""}
        </div>
    );
  }
}

export default GraphList;