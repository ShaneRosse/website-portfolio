import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!</h1>
        </header>
        <p className="App-intro">
          <p>My name is Shane Rosse.</p>
          <p>I'm an avid learner of new technology. </p>
          <p>This page was built with Create React App. </p>
          <p>Follow along as I built out the rest of my portfolio!</p>
        </p>
      </div>
    );
  }
}

export default App;
