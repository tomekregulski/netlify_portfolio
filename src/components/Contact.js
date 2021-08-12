import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id='contact-me'>
      <nav className='bottom-nav'>
        <ul className='social'>
          <li>
            <a
              // className="fontawesome"
              href='https://www.linkedin.com/in/tomek-regulski-867153130/'
              target='_blank'
              rel='noopener noreferrer'
              role='navigation'
              aria-label='link to LinkedIn'
            >
              <span>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </span>
            </a>
          </li>
          <li>
            <a
              // className="fontawesome"
              href='https://github.com/tomekregulski'
              target='_blank'
              rel='noopener noreferrer'
              role='navigation'
              aria-label='link to GitHub'
            >
              <span>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </span>
            </a>
          </li>
          <li>
            <a
              // className="fontawesome"
              href='mailto: tomek@resonantmc.com'
              target='_blank'
              rel='noopener noreferrer'
              role='navigation'
              aria-label='link to Email'
            >
              <span>
                <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' />
              </span>
            </a>
          </li>
          <li>
            <a
              // className="fontawesome"
              href='https://www.facebook.com/tomek.regulski'
              target='_blank'
              rel='noopener noreferrer'
              role='navigation'
              aria-label='link to Facebook'
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
