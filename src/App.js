import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Counter';
import Counter from './components/Counter';
import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1><br />
          <div clasName="clearfix"> </div><br />
        </header>
        <p className="clearfix , App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="clearfix , grid-figure">
          <div className="grid-photo-wrap">
            <Counter store={store}/>
        <img
            src={logo}
            alt="logo"
            className="clearfix ,grid-photo"
          />
      </div></div></div>
    );
  }
}

export default App;
