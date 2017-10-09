import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome!</h1>
        <h2 className="nav-btn-container">
          <button className="nav-btn" onClick={() => {}}>About Me</button>
          <button className="nav-btn" onClick={() => {}}>Projects</button>
          <button className="nav-btn" onClick={() => {}}>Contact</button>
        </h2>
      </header>
      <div className="App-intro">
        <div className="Intro-body">My name is Shane Rosse.</div>
        <div className="Intro-body">I'm an avid learner of new technology. </div>
        <div className="Intro-body">This page was built with Create React App. </div>
        <div className="Intro-body">Follow along as I built out the rest of my portfolio!</div>
      </div>
    </div>
  );
}

export default App;
