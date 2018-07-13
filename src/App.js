import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './components/Counter';
import Lister from './components/Lister';
import Input from './components/input';
import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1><br />
          <div clasName="clearfix"> </div><br />
        </header>
        <div className="clearfix , grid-figure">
          <div className="grid-photo-wrap">
            <Lister store={store}/>
            <Input  store={store}  />

      </div></div></div>
    );
  }
}

export default App;
