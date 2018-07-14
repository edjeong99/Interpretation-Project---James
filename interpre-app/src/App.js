import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './topMenu';
import MainContent from './mainContent';
import SidePanel from './sidePanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="Page"> {/* contain all the manu + content of this page. */}
          <TopMenu />
          <div className = "Content">  {/*  contain all content of this page*/}
            <MainContent />
            <SidePanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
