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
        The first time I asked <i>How does a website work?</i> I had recently
        turned 11 in the 5th grade.
      </p>
      <p>
        While I was lucky enough to have a teacher who pointed me to an HTML
        book and I wish I could say my career in software began there... I was
        still the kid I am at heart today, always chasing my curiosity.
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
            6th grade - Learning about network proxies to use YouTube at school.
          </li>
          <li>
            7th grade - LOGO the turtle and LEGO Mindstorms were the coolest.
          </li>
          <li>
            8th grade - built an a award winning gasoline powered hovercraft for
            the science fair.
          </li>
          <li>
            9th grade - Installing VMs on school computers to play video games.
          </li>
          <li>
            10th grade - Learning Java! Until the teacher quit, so we did
            HTML/CSS/JS.. <b>wat</b>?
          </li>
          <li>
            11th grade - Wired up circuits in a micro home and contructed a 20ft
            catapult.
          </li>
          <li>
            12th grade - Applying for colleges I was torn... I loved building
            everything.
          </li>
          <br />
          <li>
            <b>
              <i>Enter USC Electrical Engineering</i>
            </b>
          </li>
        </ul>

        <ul style={{ listStyleType: "none" }}>
          <SemesterList
            title={"Semester 1 & 2"}
            details={[
              "Introduced to Matlab, study plenty of math and science, enjoy college. :)"
            ]}
          />
          <SemesterList
            title={"Semester 3"}
            details={[
              "Program digital circuits in Verilog to understand the fundamentals of Boolean algebra and state machines."
            ]}
          />
          <SemesterList
            title={"Semester 4"}
            details={[
              "Build a wood electric guitar complete with pre-amp and filters wired on a Protoboard.",
              "Complete the engineering math and physics tracks through differential equations 2 and modern physics."
            ]}
          />{" "}
          <SemesterList
            title={"Summer 2014"}
            details={["Begin working as a remote QA engineer for extra cash."]}
          />
          <SemesterList
            title={"Semester 5"}
            details={[
              "Applying Fourier series and transforms to linear systems were the theme of the semester until a Java elective stole my attention."
            ]}
          />
          <SemesterList
            title={"Semester 6"}
            details={[
              "Quickly absorbed Objective-C and iOS textbooks",
              "Loved learning C++",
              "Experimented with MIPs Assembly on a Coldfire RISC board",
              "QA Intern for Fox Sports"
            ]}
          />
          <SemesterList
            title={"Summer 2015"}
            details={[
              "Intern at Ticketmaster pair programming alongside senior engineers.",
              "Dedicate myself to crafstmanship reading Pragmatic Programmer and Clean Code.",
              "Love the experience so much I change my major to take more software courses.",
              "The new degree path applies 3 years of EE to the CS curriculum for a Computer Engineering/Computer Science B.S."
            ]}
          />
          <br />
          <li>
            <b>
              <i>Enter USC Computer Science</i>
            </b>
          </li>
          <br />
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
