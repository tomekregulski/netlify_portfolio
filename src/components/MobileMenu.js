import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mobile-menu.css';
import resume from '../images/tomek_regulski_resume.pdf';

const MobileMenu = ({ open, setOpen }) => {
  console.log();
  return (
    <div className='menu-wrap' open={open} onClick={() => setOpen(!open)}>
      <ul className={open ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link className='nav-link' to='#about-me'>
            About Me
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='#work'>
            My Work
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='#contact'>
            Contact
          </Link>
        </li>
        <li className='nav-item'>
          <a
            href={resume}
            className='nav-link'
            download='tomek_regulski_resume'
          >
            Resume
          </a>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MobileMenu;
