import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {

  return (
    <nav id="header-nav">
        <ul id="menu-item">
            <li>
                <Link to="#about-me">
                    About Me
                </Link>
            </li>
            <li>
                <Link id="myWork" to="#work">
                    My Work
                </Link>
            </li>
            <li>
                <Link to="#contact-me">
                    Contact
                </Link>
            </li>
            {/* <li>
                <Link to="images/tomek_regulski_resume.pdf" download='tomek_regulski_resume' target="_self">
                    Resume 
                </Link>
            </li> */}
            <li>
                <a
                    href='./tomek_regulski_resume.pdf'
                    download='tomek_regulski_resume'
                >
                    Resume
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;