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

const SemesterList = ({ title, details }) => (
  <li>
    {`${title}`}
    <ul>
      {details.map(props => {
        return <li>{props}</li>;
      })}
    </ul>
  </li>
);

const AboutMe = () => (
  <section id="about-me">
    <div className="App-intro">
      <div className="Intro-body">
        <p>My name is Shane Rosse.</p>
      </div>
      <p>I'm an avid learner of new technology.</p>
      <p>
        The first time I asked <i>How does a website work?</i> It was 2004 and I
        in the 5th grade.
      </p>
      <p>
        I was lucky enough to have a teacher point me to an HTML book and my
        curiosity has never been satisfied...
      </p>
      <p>
        People often ask when I began programming... and now, you can take your
        pick over the last 10 years!
      </p>
      <div className="Intro-body" align="left">
        <ul style={{ listStyleType: "none" }}>
          <b>
            <i>
              <li>Public Education</li>
            </i>
          </b>
          <br />
          <li>
            2006 - Learn about network proxies to watch YouTube at school.
          </li>
          <li>
            2007 - LOGO programming and LEGO Mindstorms captivated my
            imagination.
          </li>
          <li>
            2008 - Build an award winning gasoline powered hovercraft for the
            science fair.
          </li>
          2009 - Learn simple AUTOCAD and build a 2 stroke engine from a kit
          <li>
            2010 - Learn Java! Until the teacher quits, so we switch to
            HTML/CSS/JS.
          </li>
          <li>
            2011 - Design and wire the electrical circuits in a 2 foot styrofoam
            home. Contruct a 20ft catapult.
          </li>
          <li>2012 - Move to Los Angeles to study Electrical Engineering.</li>
          <br />
          <li>
            <b>
              <i>USC Viterbi School of Engineering</i>
            </b>
          </li>
        </ul>

        <ul style={{ listStyleType: "none" }}>
          <SemesterList
            title={"2013"}
            details={[
              "Introduced to Matlab, study plenty of math and science, enjoy college. :)",
              "Program digital circuits in Verilog to understand the fundamentals of Boolean algebra and state machines."
            ]}
          />
          <SemesterList
            title={"2014"}
            details={[
              "Build a wood electric guitar complete with pre-amp and filters wired on a Protoboard.",
              "Complete the engineering math and physics tracks through differential equations 2 and modern physics.",
              "Work as a remote QA engineer for extra cash.",
              "Apply Fourier transforms to linear systems by hand.",
              "Java steals my attention."
            ]}
          />
          <SemesterList
            title={"2015"}
            details={[
              "Quickly absorb Objective-C and iOS textbooks",
              "Love learning C++",
              "Experiment with MIPs assembly on a Coldfire RISC board",
              "QA Intern for Fox Sports",
              "Write Objective-C at Ticketmaster pair programming alongside senior engineers.",
              "Dedicate myself to crafstmanship reading Pragmatic Programmer and Clean Code.",
              "Love the experience so much I change my major to take more software courses.",
              "The new degree path applies 3 years of EE to the CS curriculum for a Computer Engineering/Computer Science B.S.",
              "More MIPs and VHDL in Graduate Computer Architecture",
              "Solidify the fundamentals of CS in data structures and discrete math"
            ]}
          />
          <SemesterList
            title={"2016"}
            details={[
              "Build a Java clone of Google Docs as a desktop app",
              "Solve massively parallel problems on the USC HPC using CUDA, MapReduce, etc",
              "Re-implement a TCP experiment and anlysis in Python",
              "Learn Swift and build a pair of meal service feedback apps for my fraternity",
              "Write Swift and Objective-C at Ticketmaster",
              "Release my first app, LA Metro Time, to Apple's App Store",
              "Complete Stanford's OS Pintos Project",
              "Build 7 2D & 3D video games using C++ and Unreal",
              "Explore compilers and functional programming in C++",
              "Migrate global chat app LextTalk from iOS 8 to 10 while adding a number of features",
              "Work as a TA attending intro and advanced iOS courses, holding office hours and helping over 100 students",
              "I enjoy helping others learn to code so much I often help with whatever project is brought to me",
              "Migrate Alaska 511 Highways app from iOS 6 to iOS 10",
              "Contract for ShadeCraft through DeveloCorp"
            ]}
          />
        </ul>
        <b>
          <i>
            {"I was often told in 2015 that I could not accomplish my new degree by the end of 2016. " +
              "At first it was hard and then programming became second nature. " +
              "Now my curiosity is hungrier than ever.. can I help you build something? Contact me. "}
          </i>
        </b>
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
