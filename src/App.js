import React from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";

import "./App.css";

const AboutBtn = () => (
  <div className="nav-btn">
    <Link to="/">About Me</Link>
  </div>
);
const ProjectsBtn = () => (
  <div className="nav-btn">
    <Link to="/projects">Projects</Link>
  </div>
);
const ContactBtn = () => (
  <div className="nav-btn">
    <Link to="/contact">Contact</Link>
  </div>
);

const AboutMe = () => (
  <section id="about-me">
    <div className="App-intro">
      <div className="Intro-body">My name is Shane Rosse.</div>
      <div className="Intro-body">I'm an avid learner of new technology. </div>
      <div className="Intro-body">
        This page was built with Create React App.
      </div>
      <div className="Intro-body">
        Follow along as I built out the rest of my portfolio!
      </div>

      <div>
        <p>
          The first time I asked "How does a website work?" I was in 5th grade.
        </p>
        <p>
          Lucky for me I I had a teacher who gave me an HTML book. While I wish
          I could say my career in software began there... I was still the kid I
          am at heart today.
        </p>

        <ul>
          <li>
            In 7th grade I was setting up network proxies to use YouTube at
            school.
          </li>
          <li>
            In 8th grade I built an a science fair award winning hovercraft.
          </li>
          <li>
            In 9th grade I was installing VMs on the school computers to play
            video games.
          </li>
          <li>
            In 10th grade I was learning Java! Which quickly devolved into...
            HTML/CSS/JS.. <b>wat</b>?
          </li>
          <li>
            In 11th grade I was electrically wiring miniature homes and building
            catapults in Physics.
          </li>
          <li>
            By 12th grade I'd had such lopsided experiences between software and
            physics that I settled on studying Electrical Engineering
          </li>
        </ul>

        <ul>
          Semester 1-2: I was tricked! EEs still had to learn how to code
          Matlab.
          <li>
            Semester 3-4: Completed the Math and Physics tracks for EE learning
            Verilog along the way. Began work as a remote QA engineer over the
            Summer for extra cash.
          </li>
          <li>
            Semester 5: Fourier Series and Transforms were the theme of the
            semester until a Java elective stole my interest.
          </li>
          <li>
            Winter: Devoured an iOS and Objective-C book to jump ahead in a
            mobile class.
          </li>
          <li>
            Semester 6: Loved C++, Computer Organization (Assembly) and Mobile
            Apps. Spring intern as a QA engineer.
          </li>
          <li>
            Summer: Intern at Ticketmaster pair programming with senior iOS
            engineers.
          </li>
          <li>
            Decide to change my degree path to Computer Engineering/Computer
            Science I was repeatedly told these 13 classes would take 4
            semesters, but I had to do it in 3.
          </li>
          <li>
            Semester 7: Grad EE Computer Architecture, Data Structures, Discrete
            Math, Writing - a lot of C++
          </li>
          <li>
            Semester 8: Fullstack Java Apps, Algorithms, Advanced iOS,
            Networking, Distributed Computing This semester moved the needle the
            most on my "10,000 hour" mark. I was completing projects on a weekly
            basis in Java, C, C++, Python, Obj-C and Swift
          </li>
          <li>
            Semester 9: Operating Systems (Pintos in C) 2D/3D Video Games (C++
            and Unreal) Pro C++ (Functional progamming and Compilers) Senior
            Project - Provid much needed update to global chat app on iOS
          </li>
          <li>
            My final semester I also wanted to give back. I was the Teaching
            Assistant for the two iOS classes I had taken the previous year. I
            had a lot of fun spending several hours each week debugging iOS apps
            with students. I enjoy coding and helping people learn so much I
            would often assist with any class I could.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <div className="App-intro">
    <div className="Intro-body">Killin' it yo</div>
  </div>
);

const Contact = () => (
  <div className="App-intro">
    <div className="Intro-body">shane.r.rosse@gmail.com</div>
  </div>
);

function App(props) {
  return (
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
      <nav>
        <Route exact path="/" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </nav>
    </div>
  );
}

export default App;
