import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

const AboutBtn = () => <div className="nav-btn"><Link to="/">About Me</Link></div>
const ProjectsBtn = () => <div className="nav-btn"><Link to="/projects">Projects</Link></div>
const ContactBtn = () => <div className="nav-btn"><Link to="/contact">Contact</Link></div>

const AboutMe = () => <div className="App-intro">
    <div className="Intro-body">My name is Shane Rosse.</div>
    <div className="Intro-body">I'm an avid learner of new technology. </div>
    <div className="Intro-body">This page was built with Create React App. </div>
    <div className="Intro-body">Follow along as I built out the rest of my portfolio!</div>
  </div>

const Projects = () => <div className="App-intro">
    <div className="Intro-body">Killin' it yo</div>
  </div>

const Contact = () => <div className="App-intro">
      <div className="Intro-body">shane.r.rosse@gmail.com</div>
    </div>

function App(props) {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome!</h1>
        <h2 className="nav-btn-container">
          <AboutBtn />
          <ProjectsBtn />
          <ContactBtn />
        </h2>
      </header>
      <Route exact path="/" component={AboutMe}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </div>
    </Router>
  );
}

export default App;
