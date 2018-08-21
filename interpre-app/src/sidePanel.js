import React, { Component } from 'react';
import './App.css';
import TopInterpArea from './topInterpArea';
import TopArthorArea from './topArthorArea';
import TopCommentatorArea from './topCommentatorArea';

class SidePanel extends Component {



  render() {

    return (
     
        <div className="SidePanel"> 
             This is SidePanel
             <TopInterpArea />
             <TopArthorArea />
             <TopCommentatorArea />

        </div>
    );
  }
}

export default SidePanel;