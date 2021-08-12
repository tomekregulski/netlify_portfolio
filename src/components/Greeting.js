import React from "react";
import '../styles/animations.css'
import tomek from "../images/tomek2.jpg"
// import logo from '../images/tomek2.jpg'

function Greeting() {

  return (
    <section id="greeting">
      <div id="greeting-body">
        <img src={tomek} alt="Tomek Regulski" id="profile"/>
        <div id="greeting-text">
          <p id="hi">
              Hey there! I'm Tomek.
          </p>
          <p id="intro">
              I'm a full-stack developer.
          </p>
        </div>
        <a href="#work" className="btn">View my Work</a>
      </div>        
    </section>
  );
}

export default Greeting;