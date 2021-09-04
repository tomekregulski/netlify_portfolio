import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';
import resume from '../images/tomek_regulski_resume.pdf';

function NavBar(props) {
  return (
    <nav id='header-nav'>
      <ul id='menu-item'>
        <li>
          <Link to='#about-me'>About Me</Link>
        </li>
        <li>
          <Link id='myWork' to='#work'>
            My Work
          </Link>
        </li>
        <li>
          <Link to='#contact-me'>Contact</Link>
        </li>
        <li>
          <a href={resume} download='tomek_regulski_resume'>
            Resume
          </a>
        </li>
      </ul>
      <MenuToggle open={props.open} setOpen={props.setOpen} />
      <MobileMenu open={props.open} setOpen={props.setOpen} />
    </nav>
  );
}

export default NavBar;
